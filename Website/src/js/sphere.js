let popUpDiv = document.getElementById("sphere-pop-up-background");
let popUpcontent = document.getElementById("sphere-wrapper");

function popUp(){
    popUpDiv.style.display = "flex";
    popUpDiv.classList.add('backgroundAppear');
}

function closePopUp(){
    popUpDiv.style.display = "none";
    popUpbackground.classList.remove('backgroundAppear');
}

const canvas = document.getElementById('canvas');

const scene = new THREE.Scene()
        //use default camera
        const camera = new THREE.PerspectiveCamera(
            75,
            innerWidth/innerHeight,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer({
            antialias:true, //make the render better
            alpha: true, //make the background transparent
            canvas: canvas
        })

        renderer.setSize(innerWidth, innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        popUpcontent.appendChild(renderer.domElement);

        var sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('../images/globeAmericaPage.jpg') //add texture

        }));

        //create sphere
        if(document.body.classList.contains('america')){
            sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('../images/globeAmericaPage.jpg') //add texture
            
            }));
        }
        else if(document.body.classList.contains('routhToIndia')){
            sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('../images/globeRouthTopIndiaPage.jpg') //add texture
            
            }));
        }
        else if(document.body.classList.contains('circumnavigation')){
            sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('../images/globeCircumnavigationPage.jpg') //add texture
            
            }));
        }
        else if(document.body.classList.contains('northPole')){
            sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('../images/globeNorthPolePage.jpg') //add texture
            
            }));
        }
        else if(document.body.classList.contains('southPole')){
            sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load('../images/globeSouthPolePage.jpg') //add texture
            
            }));
        }
      

        const group = new THREE.Group();
        group.add(sphere);
        scene.add(group);

        camera.position.z = 22;

        function animate(){
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            sphere.rotation.y += 0.003;
        }
        animate();