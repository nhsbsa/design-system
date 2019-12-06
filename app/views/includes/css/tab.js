            
// ==========================================================================
// Tabs
// ==========================================================================

// Declare some variables

var $container = '.tabs'
var $tablist = '.tabs-list'
var $tabpanel = '.tabs-panel'

// The setup

$($container + ' ' + $tablist).attr('role', 'tablist')

$($container + ' [role="tablist"] li').attr('role', 'presentation')

$('[role="tablist"] a').attr({
  'aria-selected': 'false',
  role: 'tab',
  tabindex: '-1'
})

// Make each aria-controls correspond id of targeted section (re href)

$('[role="tablist"] a').each(function () {
  $(this).attr(
    'aria-controls', $(this).attr('href').substring(1)
  )
})

// Make the first tab selected by default and allow it focus

$('[role="tablist"] li:first-child a').attr({
  'aria-selected': 'true',
  tabindex: '0'
})

// Make each section focusable and give it the tabpanel role

$($container + ' ' + $tabpanel).attr({
  role: 'tabpanel'
})

// Make first child of each panel focusable programmatically

$($container + ' ' + $tabpanel + ' > *:first-child').attr({
  tabindex: '0'
})

// Make all but the first section hidden (ARIA state and display CSS)

$('[role="tabpanel"]:not(:first-of-type)').attr({
  'aria-hidden': 'true'
})

// Change focus between tabs with arrow keys

$('[role="tab"]').on('keydown', function (e) {
  // Define current, previous and next (possible) tabs

  var $original = $(this)
  var $prev = $(this).parents('li').prev().children('[role="tab"]')
  var $next = $(this).parents('li').next().children('[role="tab"]')
  var $target

  // Find the direction (prev or next)

  switch (e.keyCode) {
    case 37:
      $target = $prev
      break
    case 39:
      $target = $next
      break
    default:
      $target = false
      break
  }

  if ($target.length > 0) {
    $original.attr({
      tabindex: '-1',
      'aria-selected': false
    })

    $target.attr({
      tabindex: '0',
      'aria-selected': true
    }).focus()
  }

  // Hide panels

  $($container + ' [role="tabpanel"]')
    .attr('aria-hidden', 'true')

  // Show panel which corresponds to target

  $('#' + $(document.activeElement).attr('href').substring(1))
    .attr('aria-hidden', false)
})

// Handle click on tab to show + focus tabpanel

$('[role="tab"]').on('click', function (e) {
  e.preventDefault()

  // Remove focusability [sic] and aria-selected

  $('[role="tab"]').attr({
    tabindex: '-1',
    'aria-selected': false
  })

  // Replace above on clicked tab

  $(this).attr({
    'aria-selected': true,
    tabindex: '0'
  })

  // Hide panels

  $($container + ' [role="tabpanel"]').attr('aria-hidden', 'true')

  // Show corresponding panel

  $('#' + $(this).attr('href').substring(1))
    .attr('aria-hidden', false)
})
            