<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>CNY WebVR from Patrick</title>
    <meta name="description" content="CNY WebVR from Patrick">
    <script src="js/aframe.min.js"></script>
    
    <link rel="stylesheet" href="css/animate.css" />
    <link rel="stylesheet" href="css/style.css" />
</head>

<body>
    <a-scene>
        <!-- preload assets -->

        <!--<a-scene vr-mode-ui="enabled: false">-->
        <script src="js/patrick.js"></script>

        <a-light type="point" color="#fd1" position="0 5 0"></a-light>
        <a-light type="point" color="#fd1" position="0.1 1.4 1"></a-light>

        <a-sky src="#pano"></a-sky>
        <a-camera position="0 0 0">
            <a-cursor color="#fff"></a-cursor>
        </a-camera>
    </a-scene>
</body>

</html>
