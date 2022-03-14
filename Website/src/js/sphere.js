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
        const camera = new THREE.PerspectiveCamera(
            75,
            innerWidth/innerHeight,
            0.1,
            1000
        )
        const renderer = new THREE.WebGLRenderer({
            antialias:true,
            alpha: true,
            canvas: canvas
        })

        renderer.setSize(1200, 600);
        renderer.setPixelRatio(window.devicePixelRatio);
        
        popUpcontent.appendChild(renderer.domElement);

        //create sphere
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50), new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load('../images/globe.jpg')
    
        }));

        const group = new THREE.Group();
        group.add(sphere);
        scene.add(group);

        camera.position.z = 15
        const mouse = {
            x: undefined,
            y: undefined
        };
        function animate(){
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
            sphere.rotation.y += 0.001
         
        }
        animate();