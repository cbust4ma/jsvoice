window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
      

        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
            
       

        }

        var panorama, viewer, container, infospot;

        container = document.querySelector( '#container' );
        
        panorama = new PANOLENS.ImagePanorama( URL.createObjectURL(this.files[0]) );
    
        
        infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
        infospot.position.set( 0, 0, -5000 );
        infospot.addHoverText( 'Hello Andy', 30 );
        panorama.add( infospot );
        
        viewer = new PANOLENS.Viewer( { container: container } );
        viewer.add( panorama );
    });
  });

  var panorama, viewer, container, infospot;

        container = document.querySelector( '#c' );
        
        panorama2 = new PANOLENS.ImagePanorama( "./a.jpg" );
    
        
        infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
        infospot.position.set( 0, 0, -5000 );
        infospot.addHoverText( 'Hello Andy', 30 );
        panorama2.add( infospot );
        
        viewer = new PANOLENS.Viewer( { container: container } );
        viewer.add( panorama2 );