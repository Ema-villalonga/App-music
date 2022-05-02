import "./styles.css";
//import "./main.js";

document.getElementById("app").innerHTML = `
<!-- Player -->
    <main class="player">
        <!-- Title -->
        <h1 class="title" id="title"></h1>

        <!-- Cover -->
        <img src="" alt="" class="cover" id="cover">

        <!-- Audio HTML Media elememt -->
        <audio src="" id="audio"></audio>

        <!-- Progress bar -->
        <div id="progress-container" class="progress-container">
            <section id="progress" class="progress"></section>
        </div>

        <!-- Controls -->
        <section class="controls">
            <button class="prev">
                <i id="prev" class="fas fa-backward"></i>
            </button>
            <button class="play">
                <i id="play" class="fas fa-play"></i>
            </button>
            <button class="next">
                <i id="next" class="fas fa-forward"></i>
            </button>
        </section>

        <!-- Song list -->
        <ul class="songs" id="songs">
            <!-- <li><a href="#">Song 1</a></li>
            <li><a class="active" href="#">Song 2</a></li>
            <li><a href="#">Song 3</a></li> -->
        </ul>
    </main>
`;
