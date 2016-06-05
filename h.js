<script>

<script type="text/javascript">
        function addimage() { 
          var img = document.createElement("img");
          img.src = "error.jpg"; 
          img.height = 100; 
          img.width = 150;


          //optionally set a css class on the image
          var class_name = "foo";
          img.setAttribute("class", class_name);

          document.body.appendChild(img);
        }
</script>