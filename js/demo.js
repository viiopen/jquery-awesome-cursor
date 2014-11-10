$(window).load(function() {
  var drawing = false;

  $.fn.awesomeCursor.defaults.color = 'white';

  $(document).on('mouseup', function(ev) {
    drawing = false;
  });

  $('canvas').awesomeCursor('pencil', {
    color: 'black',
    hotspot: $('select[name="hotspot"]').val()
  });

  $('#demo-link').awesomeCursor('external-link');

  // Demo sections initial cursors
  $('#iconPanel .panel-body').awesomeCursor('pencil');
  $('#colorPanel .panel-body').awesomeCursor('pencil', {
    color: 'red'
  });
  $('#sizePanel .panel-body').awesomeCursor('pencil', {
    size: 32
  });
  $('#hotspotPanel .panel-body').awesomeCursor('pencil', {
    hotspot: 'bottom left'
  });

  // Icon demo
  $('#try-icon').on('keyup', 'input', function(ev) {
    if ($(this).val()) {
      $(this).parents('.panel-body').awesomeCursor($(this).val());
    }
  });

  // Demo forms
  $('form.try').on('change keyup', 'select, input', function(ev) {
    var opts = {},
      $form = $(this).parents('form');

    opts[$form.data('property')] = $(this).val();

    if ($form.parents('.panel-body').find('canvas').length) {
      $form.parents('.panel-body').find('canvas').awesomeCursor('pencil', $.extend(opts, {
        color: 'black'
      }));
    } else {
      $form.parents('.panel-body').awesomeCursor('pencil', opts);
    }
  });

  // Icon name demo suggestions
  $('.suggestion').on('click', function(ev) {
    ev.preventDefault();
    $(this).closest('.panel-body').find('input[type="text"]')
      .val($(this).text())
      .trigger('keyup');
  });

  $('form').on('submit', function(ev) {
    ev.preventDefault();
  });

  // Hotspot demo canvas drawing
  $('canvas').on('mousedown', function(ev) {
    drawing = true;
  }).on('mousedown mousemove', function(ev) {
    if (!drawing) {
      return;
    }

    var context = this.getContext('2d'),
      x = ev.pageX - $(this).offset().left,
      y = ev.pageY - $(this).offset().top;

    context.fillRect(x - 2.5, y -2.5, 5, 5);
  }).on('mouseout', function(ev) {
    drawing = false;
  });

  // Hotspot demo clear button
  $('.clear-canvas').click(function() {
    var $canvas = $(this).siblings('canvas'),
      context = $canvas[0].getContext('2d');

    context.clearRect(0, 0, $canvas.width(), $canvas.height());
  });

  // Examples section
  $('#example1').awesomeCursor('paper-plane', {
    color: '#2cb2da'
  });

  $('#example2').awesomeCursor('paint-brush', {
    color: '#34db33',
    size: 32
  });

  $('#example3').awesomeCursor('ban', {
    color: 'red',
    size: 24,
    hotspot: 'center'
  });

  $('section').append($(
    '<a class="text-muted pull-right back-to-top" href="#">' +
      '<i class="fa fa-angle-up"></i> Back to top' +
    '</a>'
  ));
});
