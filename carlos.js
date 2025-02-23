
$(document).ready(function() {
    // Mantener ocultas las secciones excepto "Inicio"
    $('.seccion').hide();
    $('#inicio').fadeIn(500);

    // Efecto de escritura automática en el mensaje de bienvenida
    function escribirTexto(elemento, texto, velocidad) {
        let i = 0;
        let intervalo = setInterval(function() {
            if (i < texto.length) {
                $(elemento).append(texto.charAt(i));
                i++;
            } else {
                clearInterval(intervalo);
            }
        }, velocidad);
    }
    escribirTexto('#texto-escritura', "Hola, soy Carlos y tengo 21 años. Soy desarrollador de aplicaciones web con experiencia en diversas tecnologías y en constante aprendizaje.", 50);

    // Manejo del menú de navegación
    $('nav a').click(function(e) {
        e.preventDefault();
        let sectionId = $(this).data('section');

        $('.seccion').fadeOut(300, function() {
            $('#' + sectionId).fadeIn(500);
        });

        $('nav a').removeClass('activo');
        $(this).addClass('activo');
    });

    // Efecto Sticky en el menú
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });

    // Botón "Volver arriba"
    $('body').append('<div id="volverArriba">&#8679;</div>');

    $('#volverArriba').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#volverArriba').fadeIn();
        } else {
            $('#volverArriba').fadeOut();
        }
    });

    // Animación en botones al hacer clic
    $('button').on('mousedown', function() {
        $(this).animate({ transform: 'scale(0.9)' }, 100);
    }).on('mouseup', function() {
        $(this).animate({ transform: 'scale(1)' }, 100);
    });

    // Efecto en la imagen de perfil
    $('.profile-pic img').hover(
        function() {
            $(this).css({ transform: 'scale(1.1)', boxShadow: '0px 4px 15px rgba(255, 215, 0, 0.7)' });
        },
        function() {
            $(this).css({ transform: 'scale(1)', boxShadow: 'none' });
        }
    );

    // Activar giro del logo solo con doble clic
    $('.logo-container img').dblclick(function() {
        $(this).addClass('girar'); // Agregar clase que activa la animación

        // Eliminar la clase después de la animación para que pueda repetirse
        setTimeout(() => {
            $(this).removeClass('girar');
        }, 1000);
    });
});
