

// Trex button shadow effect
var Trexbutton = document.getElementById("Trexbtn") 
Trexbutton.addEventListener("mouseover", function(){
    this.style= "box-shadow: 2px 2px 2px grey";
    this.width = "40"
});

Trexbutton.addEventListener("mouseout", function(){
    this.style= "";
});


// Velociraptor button shadow

var Velociraptorbutton = document.getElementById("Velociraptorbtn") 
Velociraptorbutton.addEventListener("mouseover", function(){
    this.style= "box-shadow: 2px 2px 2px grey";
    this.width = "40"
});

Velociraptorbutton.addEventListener("mouseout", function(){
    this.style= "";
});

// Triceratops button shadow

var Triceratopsbutton = document.getElementById("Triceratopsbtn") 
Triceratopsbutton.addEventListener("mouseover", function(){
    this.style= "box-shadow: 2px 2px 2px grey";
    this.width = "40"
});

Triceratopsbutton.addEventListener("mouseout", function(){
    this.style= "";
});

// Spinosaurus button shadow

var Spinosaurusbutton = document.getElementById("Spinosaurusbtn") 
Spinosaurusbutton.addEventListener("mouseover", function(){
    this.style= "box-shadow: 2px 2px 2px grey";
    this.width = "40"
});

Spinosaurusbutton.addEventListener("mouseout", function(){
    this.style= "";
});

// Stegosaurus button shadow

var Stegosaurusbutton = document.getElementById("Stegosaurusbtn") 
Stegosaurusbutton.addEventListener("mouseover", function(){
    this.style= "box-shadow: 2px 2px 2px grey";
    this.width = "40"
});

Stegosaurusbutton.addEventListener("mouseout", function(){
    this.style= ""; 
});

// Triceratops button shadow

var Triceratopsbutton = document.getElementById("Triceratopsbtn") 
Triceratopsbutton.addEventListener("mouseover", function(){
    this.style= "box-shadow: 2px 2px 2px grey";
    this.width = "40"
});

Triceratopsbutton.addEventListener("mouseout", function(){
    this.style= "";
});



let dianasaurs = {

      ShowData : function(dinasorData){
        document.getElementById("titlehanger"). innerHTML = dinasorData.titleHanger
        document.getElementById("imagehanger"). innerHTML = dinasorData.imageHanger
        document.getElementById("summaryhanger"). innerHTML = dinasorData.summaryHanger
        document.getElementById("videohanger"). innerHTML = dinasorData.videoHanger
        document.getElementById("forcolouring").style.backgroundColor = dinasorData.colour
      }

};

triceratopsData = {
  titleHanger : '<h2>Triceratops</h2>',
  imageHanger : '<img src="Triceratops.jpeg" alt="Triceratops Image", class="center">',
  summaryHanger : "<p>Triceratops is a genus of herbivorous chasmosaurine ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the Late Cretaceous period, about 68 million years ago in what is now North America. It is one of the last-known non-avian dinosaur genera, and became extinct in the Cretaceous–Paleogene extinction event 66 million years ago. The name Triceratops, which literally means 'three-horned face', is derived from the Greek words trí- (τρί-) meaning 'three', kéras (κέρας) meaning 'horn', and ṓps (ὤψ) meaning 'face'.</p>",
  videoHanger: '<iframe width="560" height="315" src="https://www.youtube.com/embed/CGvE1M95rtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  colour: "#fcab10"
}


VelociraptorData = {
  titleHanger : '<H2>Velociraptor</H2>',
  imageHanger : '<img src="Velociraptor.jpeg" alt="Velociraptor Image" class="center">' ,
  summaryHanger : '<p>Velociraptor (/vɪˈlɒsɪræptər/; meaning "swift seizer" in Latin) is a genus of dromaeosaurid theropod dinosaur that lived approximately 75 to 71 million years ago during the latter part of the Cretaceous Period. Two species are currently recognized, although others have been assigned in the past. The type species is V. mongoliensis; fossils of this species have been discovered in Mongolia. A second species, V. osmolskae, was named in 2008 for skull material from Inner Mongolia, China.</p>',
  videoHanger: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xcRxwi0x5ig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  colour: "#dbd5b5"
}

SpinosaurusData = {
  titleHanger : '<H2>Spinosaurus</H2>',
  imageHanger : '<img src="Spinosaurus.jpeg" alt="Spinosaurus Image" class="center">' ,
  summaryHanger : '<p>Spinosaurus (meaning "spine lizard") is a genus of spinosaurid dinosaur that lived in what now is North Africa during the Cenomanian to upper Turonian stages of the Late Cretaceous period, about 99 to 93.5 million years ago.[2][3] The genus was known first from Egyptian remains discovered in 1912 and described by German palaeontologist Ernst Stromer in 1915. The original remains were destroyed in World War II, but additional material came to light in the early 21st century. It is unclear whether one or two species are represented in the fossils reported in the scientific literature. The best known species is S. aegyptiacus from Egypt, although a potential second species, S. maroccanus, has been recovered from Morocco. The contemporary spinosaurid genus Sigilmassasaurus has also been synonymized by some authors with S. aegyptiacus, though other researchers propose it to be a distinct taxon. Another possible junior synonym is Oxalaia from the Alcântara Formation in Brazil.</p>',
  videoHanger: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VTzfaY2kx0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  colour: "#2b9eb3"
}



TrexData = {
  titleHanger : '<H2>Trex</H2>',
  imageHanger : '<img src="trex.jpeg" alt="TRex image" class="center">' ,
  summaryHanger : '<p>Tyrannosaurus is a genus of large theropod dinosaur. The species Tyrannosaurus rex (rex meaning "king" in Latin), often called T. rex or colloquially T-Rex, is one of the best represented theropods. Tyrannosaurus lived throughout what is now western North America, on what was then an island continent known as Laramidia. Tyrannosaurus had a much wider range than other tyrannosaurids. Fossils are found in a variety of rock formations dating to the Maastrichtian age of the Upper Cretaceous period, 68 to 66 million years ago. It was the last known member of the tyrannosaurids and among the last non-avian dinosaurs to exist before the Cretaceous–Paleogene extinction event.</p>',
  videoHanger: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BsR_xFSUCVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  colour: "#44af69"
}

StegosaurusData = {
  titleHanger : '<H2>Stegosaurus</H2>',
  imageHanger : '<img src="Stegosaurus.jpeg" alt="Stegosaurus image" class="center">' ,
  summaryHanger : '<p>A large, slow moving plant-eater, Stegosaurus would have defended itself from predators like Allosaurus and Ceratosaurus with its powerful spiked tail. The bony plates along its back were embedded in the skin of the animal, not attached to its skeleton, which is why in most fossil finds the plates are separated from the body. When O C Marsh described the first fossil of a Stegosaurus, he concluded that the plates would have lain flat on its back. After finding a specimen that had been covered with mud, which had held the plates in place, Marsh realised that they stood vertically, alternately on either side of the spine. Scientists are not exactly sure what the plates were used for. They may have warned off predators, or allowed members of the same species to recognise each other. Another suggestion is that the plates were used to regulate body temperature.</p>',
  videoHanger: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ckIHRT-SkIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  colour: "#f8333c"
}


document.querySelector("#Triceratopsbtn").addEventListener("click", function () {
    dianasaurs.ShowData(triceratopsData);
  });

  document.querySelector("#Trexbtn").addEventListener("click", function () {
    dianasaurs.ShowData(TrexData);
  });

  document.querySelector("#Stegosaurusbtn").addEventListener("click", function () {
    dianasaurs.ShowData(StegosaurusData);
  });

  document.querySelector("#Spinosaurusbtn").addEventListener("click", function () {
    dianasaurs.ShowData(SpinosaurusData);
  });

  document.querySelector("#Velociraptorbtn").addEventListener("click", function () {
    dianasaurs.ShowData(VelociraptorData);
  });