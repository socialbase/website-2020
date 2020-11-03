/*
Documento JS
Autor: Weslei Silveira - www.wesleisilveira.com.br
Data: 29/09/2020
*/
var RegisterSB = ( function () {

  'use strict';

  /* ------------------------------------------------------------------------------- */
	/*  Variables
	/* ------------------------------------------------------------------------------- */

	var form_register = $('#form-register'),
      form_button = form_register.find('.btn-next').text();

  /* ------------------------------------------------------------------------------- */
  /*  Private Functions
  /* ------------------------------------------------------------------------------- */

  var sb_mask = function () {
    if ( typeof $.fn.mask !== 'undefined' ) {

      var phone = $('#phone');
      console.log(phone);

      phone.bind( 'paste', function (e) { e.preventDefault(); } );

      var SPMaskBehavior = function (val) { return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009'; },
        spOptions = {
        onKeyPress : function (val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options);
        },
        clearIfNotMatch : true
      };

      phone.mask( SPMaskBehavior, spOptions );

    }

	};

  var sb_events = function () {

    $('.nav li a').on( 'click', false ); //Descomentar essa linha após concluir integração

    $('.btn-prev').on( 'click', function () {
      var prev = $('.nav li a.active').parent().prev().find('a').attr('href');
      if ( typeof prev != 'undefined' && prev.length > 0 ) {
        $('.nav li a[href="'+prev+'"]').tab('show');
      }
    });

// Adicionar .btn-next caso utilizar esse metodo
/*
    $('.btn-next').on( 'click', function () {
      var next = $('.nav li a.active').parent().next().find('a').attr('href');
      if ( typeof next != 'undefined' && next.length > 0 ) {
        $('.nav li a[href="'+next+'"]').tab('show');
      }
    });
*/
  };

  var sb_password = function () {

    var button = $('.btn-password');

    if ( button.length > 0 ) {

      button.on( 'click', function () {

        var input = $('.btn-password').closest('.input-group').find('.form-control');

        if ( input.length > 0 ) {

          if ( $(this).hasClass('visible') ) {
            input.attr( 'type', 'password' );
          } else {
            input.attr( 'type', 'text' );
          }

          $(this).toggleClass('visible');

        }

      });

    }

  };

  var sb_slider = function () {

    if ( typeof $.fn.slick !== 'undefined' ) {

      $('.testimonial-slider').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });

    }

  };

  var sb_form = function () {

    form_register.validate({
      onfocusout: false,
      rules: {
        email: {
          required: true,
          email: true
        },
        name: {
          required: true,
        },
        company: {
          required: true,
        },
        password: {
          required: true,
        },
        company_name: {
          required: true,
        },
        company_employees: {
          required: true,
        },
        company_office: {
          required: true,
        },
        company_sector: {
          required: true,
        },
        company_certificate: {
          required: true,
        },
        department: {
          required: true,
        }
      },
      messages: {
        email: {
          required: 'Informe seu e-mail',
          email: 'Informe um e-mail válido'
        }
      },
      submitHandler: sb_submit.nexting //ou sb_submit.nexting
    });

	};

	var sb_submit = {

    // Utilizar para trocar de aba/ remover se optar por utilizar o botão .btn-next
    nexting: function () {

      var next = $('.nav li a.active').parent().next().find('a').attr('href');
      if ( typeof next != 'undefined' && next.length > 0) {
        $('.nav li a[href="'+next+'"]').tab('show');
      } else {
        sb_submit.register();
      }

    },

		register: function () {

			$.ajax({
				type : 'POST',
        url : site.url+'/template-parts/register/send-register.php',
        data : form_register.serialize(),
        beforeSend: function () {
          form_register.find('.form-control').attr( 'readonly', true );
          form_register.find('.btn').prop( 'disabled', true );
          form_register.find('.btn-next').html( 'Registrando...' );
        },
		    success: sb_return.register,
		    error: sb_return.error,
        complete: function () {
          form_register.find('.form-control').attr( 'readonly', false );
          form_register.find('.btn').prop( 'disabled', false );
          form_register.find('.btn-next').html( form_button );
        }
			});

		},

	};

  var sb_return = {

		register: function ( response ) {
      let data = JSON.parse(response);

      if ( data ) {
        $('#form-card').hide();
        $('#response-card').show();
        $('#response-email').html(data.email);
        $('#response-url-id').attr('href', data.url);
      }

    },

		error: function () {}

	};

  return {

    /* ------------------------------------------------------------------------------- */
    /*  Initiate Functions
    /* ------------------------------------------------------------------------------- */

    init: function () {
      sb_events();
      sb_password();
      sb_slider();
      sb_form();
      sb_mask();
      checkDevice();
    }

  };

}());

// Init Module
$( function () {
  RegisterSB.init();
});

function checkDevice() {
  if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
    $('#register_tech').val('Mobile');
  } else {
    $('#register_tech').val('Desktop');
  }
};