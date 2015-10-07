window.onload = function(){

  var setStyles = function( _element, _attributes ){
    if( _element ){
      for( var key in _attributes ){
        _element.style[ key ] = _attributes[ key ];
      }
    }
  };

  var main = {};
  main.mode = 0;
  main.phase = 0;

  main.nakamis = [
    'SpaceNavigator SE.jpg',
    'KOMPLETE 10.png',
    'Virus TI2 Polar.jpg',
    'iPad Air 128GB.png',
    'Ozone 6.jpg',
    'GTX980Ti.jpg',
    'Ableton Push.jpg',
    'JD-Xi.jpg',
    'XBA-H3.jpg'
  ];

  main.afterDiv = document.createElement( 'div' );
  document.body.appendChild( main.afterDiv );
  setStyles( main.afterDiv, {
    position : 'absolute',
    display : 'none',
    left : '0px',
    width : '100%',
    textAlign : 'center',
    zIndex : 49
  } );

  main.message = document.createElement( 'div' );
  main.afterDiv.appendChild( main.message );
  setStyles( main.message, {
    color : '#f00',
    fontFamily : 'ＭＳ ゴシック, sans-serif',
    fontSize : '32px',
    textShadow : '-2px -2px 0 #fff, 0px -2px 0 #fff, 2px -2px 0 #fff, -2px 0px 0 #fff, 2px 0px 0 #fff, -2px 2px 0 #fff, 0px 2px 0 #fff, 2px 2px 0 #fff'
  } );

  main.disclaimer = document.createElement( 'div' );
  main.disclaimer.innerHTML = '※これはジョークです。気持ちだけで十分嬉しいです。';
  document.body.appendChild( main.disclaimer );
  setStyles( main.disclaimer, {
    position : 'absolute',
    display : 'none',
    right : '8px',
    bottom : '8px',
    color : '#000',
    zIndex : 29,
    fontSize : '16px',
    textShadow : '-2px -2px 0 #fff, 0px -2px 0 #fff, 2px -2px 0 #fff, -2px 0px 0 #fff, 2px 0px 0 #fff, -2px 2px 0 #fff, 0px 2px 0 #fff, 2px 2px 0 #fff'
  } );

  main.nakami = new Image();
  setStyles( main.nakami, {
    position : 'absolute',
    zIndex : 29,
    display : 'none'
  } );
  document.body.appendChild( main.nakami );
  main.setNakami = function(){
    var dice = Math.floor( Math.random() * main.nakamis.length );
    var nakami = main.nakamis[ dice ];

    main.nakami.src = 'nakami/' + nakami;

    var str = 'おめでとうございます！！<br />';
    str += '誕生日を祝っていただいたあなたに<br />';
    str += 'FMS_Catに ' + nakami.split( '.' )[ 0 ] + ' を買ってあげる権利<br />';
    str += 'を差し上げます！！';
    main.message.innerHTML = str;

    if( main.tweetA ){
      main.tweetA.href = 'https://twitter.com/intent/tweet?text=FMS_Catの誕生日プレゼントに%20' + nakami.split( '.' )[ 0 ] + '%20を買ってあげる権利を手に入れました%20http://FMS-Cat.github.io/birthday2015';
    }
  };

  step( {
    0 : function( _ ){
      requestImage( 'gacha.png', function( _img ){
        main.gachaImage = _img;
        document.body.appendChild( _img );
        setStyles( _img, {
          position : 'absolute',
          transformOrigin : '50% 50% 0',
          zIndex : 1
        } );

        _img.addEventListener( 'click', function(){
          main.mode = 1;
          main.phase = 0.0;

          main.setNakami();
        } );

        _();
      } );

      requestImage( 'cap.png', function( _img ){
        main.capImage = _img;
        document.body.appendChild( _img );
        setStyles( _img, {
          position : 'absolute',
          transformOrigin : '50% 50% 0',
          zIndex : 5,
          display : 'none'
        } );
        _();
      } );

      requestImage( 'click.png', function( _img ){
        main.clickImage = _img;
        document.body.appendChild( _img );
        setStyles( _img, {
          position : 'absolute',
          zIndex : 4
        } );
        _();
      } );

      requestImage( 'amzn.png', function( _img ){
        main.amznA = document.createElement( 'a' );
        main.amznA.href = 'http://www.amazon.co.jp/registry/wishlist/G2Q0VCLNL0KE';
        main.amznA.target = '_blank';
        main.amznImage = _img;
        main.afterDiv.appendChild( main.amznA );
        main.amznA.appendChild( _img );
        _();
      } );

      requestImage( 'tweet.png', function( _img ){
        main.tweetA = document.createElement( 'a' );
        main.tweetA.href = 'about:blank';
        main.tweetA.target = '_blank';
        main.tweetImage = _img;
        main.afterDiv.appendChild( main.tweetA );
        main.tweetA.appendChild( _img );
        _();
      } );

      main.itaPoly = new ItaPoly( window.innerWidth, window.innerHeight );
      requestText( 'frag.frag', function( _text ){
        main.itaPoly.createProgram( _text, function( _i ){
          window.addEventListener( 'resize', function(){
            _i.setSize( window.innerWidth, window.innerHeight );
          } );
          setStyles( _i.canvas, {
            position : 'absolute',
            top : '0px',
            left : '0px',
            zIndex : 0
          } );
          document.body.appendChild( _i.canvas );
          _();
        } );
      } );
    },

    6 : function( _ ){
      var update = function(){
        main.itaPoly.update();

        setStyles( main.gachaImage, {
          left : window.innerWidth * 0.5 - window.innerHeight * 0.25 + 'px',
          top : window.innerHeight * 0.25 + 'px',
          width : window.innerHeight * 0.5 + 'px',
          height : window.innerHeight * 0.5 + 'px'
        } );

        setStyles( main.capImage, {
          display : 'none',
          left : window.innerWidth * 0.5 - window.innerHeight * 0.10 + 'px',
          top : window.innerHeight * 0.6 + 'px',
          width : window.innerHeight * 0.1 + 'px',
          height : window.innerHeight * 0.1 + 'px'
        } );

        setStyles( main.clickImage, {
          left : window.innerWidth * 0.5 - window.innerHeight * 0.3 + 'px',
          top : window.innerHeight * 0.1 + 'px',
          width : window.innerHeight * 0.6 + 'px',
          height : window.innerHeight * 0.2 + 'px'
        } );

        setStyles( main.nakami, {
          display : 'none',
          left : window.innerWidth * 0.5 - window.innerHeight * 0.2 + 'px',
          top : window.innerHeight * 0.1 + 'px',
          width : window.innerHeight * 0.4 + 'px',
          height : window.innerHeight * 0.4 + 'px'
        } );

        setStyles( main.afterDiv, {
          top : window.innerHeight * 0.6 + 'px'
        } );

        main.afterDiv.style.display = 'none';
        main.disclaimer.style.display = 'none';

        main.phase += 0.01;
        if( main.mode !== 0.0 && 1.0 < main.phase ){
          main.mode ++;
          main.phase = 0.0;
        }

        main.itaPoly.setFloat( 'phase', main.phase );
        main.itaPoly.setFloat( 'mode', main.mode );

        if( main.mode === 0 ){
        }else if( main.mode === 1 ){
          setStyles( main.gachaImage, {
            transform : 'rotateZ( ' + Math.sin( main.phase * 100.0 ) * 10.0 + 'deg )'
          } );
        }else if( main.mode === 2 ){
          setStyles( main.capImage, {
            display : 'block',
            left : window.innerWidth * 0.5 - window.innerHeight * ( 0.1 - main.phase * 0.1 ) + 'px',
            top : window.innerHeight * ( 0.6 - main.phase * 0.1 ) + 'px',
            transform : 'rotateZ( ' + main.phase * Math.PI * 800.0 + 'deg )'
          } );
        }else if( main.mode === 3 ){
          setStyles( main.gachaImage, {
            transform : 'scale( ' + ( 1.0 - main.phase * 0.3 ) + ' )'
          } );

          setStyles( main.capImage, {
            display : 'block',
            left : window.innerWidth * 0.5 - window.innerHeight * 0.25 + 'px',
            top : window.innerHeight * 0.5 + 'px',
            transform : 'scale( ' + ( main.phase * 4.0 + 1.0 ) + ' )'
          } );
        }else{
          main.afterDiv.style.display = 'block';
          main.disclaimer.style.display = 'block';

          setStyles( main.capImage, {
            display : 'block'
          } );

          setStyles( main.nakami, {
            display : 'block',
            transform : 'scale3d( ' +
              ( 0.8 + 0.2 * ( Math.floor( main.phase * 27.0 ) % 3 ) ) + ',' +
              ( 1.2 - 0.2 * ( Math.floor( main.phase * 27.0 ) % 3 ) ) + ',1.0 )'
          } );
        }

        requestAnimationFrame( update );
      };
      update();
    }
  } );

};
