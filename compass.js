let heading = 0;

// Membaca arah kompas HP
window.addEventListener("deviceorientation", function (event) {

    if (event.alpha !== null) {
        heading = event.alpha;
    }

});
AFRAME.registerComponent("compass-follow", {

    tick: function () {

        const root = document.querySelector("#compassRoot");

        if (!root) return;

        root.object3D.rotation.y = THREE.MathUtils.degToRad(-heading);

    }

});