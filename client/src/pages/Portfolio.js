import React from "react";
import "../index.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Spin-that-meal</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>An application that allows members to create recipes and playlists, all whilst chatting to fellow members.</p>
        </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">Handlebars</p>
            <p className="badges">UKkit.css</p>
            <p className="badges">Heroku</p>
            <p className="badges">ESLint</p>
            <p className="badges">MVC</p>
            
            <p className="badges">bcryptjs</p>
            <p className="badges">dotenv</p>
            <p className="badges">express</p>
            <p className="badges">mysql2</p>
            <p className="badges">nodemailer</p>
            <p className="badges">passport</p>
            <p className="badges">randomcolor</p>
            <p className="badges">sequelize</p>
            <p className="badges">socket.io</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank"
                        href="https://murmuring-reaches-65423.herokuapp.com/" rel="noreferrer">View Spin-that-meal heroku deployment</a></li>
                <li><a target="_blank"
                        href="https://github.com/chrisjmckeown/Spin-that-Meal" rel="noreferrer">View Spin-that-meal git
                        repo</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/Spin-that-meal.png" alt="Spin-that-meal"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>BandEaR discover live artists</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>A awsome app that allows you to search by band name, preview their music and see all upcoming
                events.</p> 
                <p> Using multiple Web APIs (Spotify,Bands in town, IP Info, Google Maps) to search artists and display their top hits.</p> 
            </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">Momentum</p>
            <p className="badges">Materialize 1.0.0</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank"
                        href="https://chrisjmckeown.github.io/BandEaR_Discover_live_artists/" rel="noreferrer">View BandEaR live
                        page</a></li>
                <li><a target="_blank"
                        href="https://github.com/chrisjmckeown/BandEaR_Discover_live_artists" rel="noreferrer">View BandEaR git
                        repo</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/bandear.png" alt="BandEaR discover live artists"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Workout Tracker</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>A workout tracker to create and track daily routines. Log multiple exercises for a workout on a given day. Track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, then track the distance travelled.</p>
           </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">Bootstrap</p>
            <p className="badges">Heroku</p>
            <p className="badges">MVC</p>
            
            <p className="badges">chart</p>
            <p className="badges">dotenv</p>
            <p className="badges">express</p>
            <p className="badges">mongojs</p>
            <p className="badges">mongoose</p>
            <p className="badges">morgan</p>
        </div>
        <hr/>
        <div className="more-info-links">
             <p>For more info:</p>
            <ul>
                <li><a target="_blank"
                        href="https://quiet-anchorage-00284.herokuapp.com/" rel="noreferrer">View Workout heroku deployment</a></li>
                <li><a target="_blank"
                        href="https://github.com/chrisjmckeown/Workout_Tracker" rel="noreferrer">View Workout git
                        repo</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/workout.png" alt="Workout"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>KiwiCodes - Bonus Tools</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>A set of 140+ tools to aid in Autodesk Revit (AEC Industry) developed using C#.net.</p>
            </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">C#.net</p>
            <p className="badges">Autodesk Revit API</p>
            <p className="badges">MVC</p>
            <p className="badges">Azure</p>
            <p className="badges">SSMS</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a href="kiwicodes.html">View details and extensive links</a></li>
                <li><a target="_blank"
                        href="https://apps.autodesk.com/RVT/en/Detail/Index?id=2077603980990329161&appLang=en&os=Win64" rel="noreferrer">
                        View Autodesk APP Store for download</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/kiwicodes.png" alt="Weather Dashboard"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Burger Logger</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>The Burger Logger app that lets users input the names of burgers they'd like to eat, and then track when they have eat them!</p>
            </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">Handlebars</p>
            <p className="badges">Heroku</p>
            <p className="badges">MVC</p>

            <p className="badges">express</p>
            <p className="badges">mysql</p>
            <p className="badges">moment</p>
        </div>
        <hr/>
        <div className="more-info-links"> <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/burger" rel="noreferrer">View
                    Burger git
                        repo</a></li>
                <li><a target="_blank"
                        href="https://dreadful-mausoleum-22058.herokuapp.com/" rel="noreferrer">View
                        Deployed App</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/Burger.png" alt="Burger"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Employee Tracker</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>A Content Management Systems interface to able viewing and managing of departments, roles, and
                employees in a company.</p>
             </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            
            <p className="badges">console.table</p>
            <p className="badges">mysql</p>
            <p className="badges">inquirer</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/Employee_Tracker" rel="noreferrer">View
                        Employee Tracker git
                        repo</a></li>
                <li><a target="_blank"
                        href="https://drive.google.com/file/d/1alrQcJ0D_XXDb2wL4pfRfNdajZv3j6IH/view" rel="noreferrer">View
                        Database setup Demo</a></li>
                <li><a target="_blank"
                        href="https://drive.google.com/file/d/1jGqbpWhD8HiTGCryKMRu-k1tozhRPwKL/view" rel="noreferrer">View
                        Employee Tracker Demo</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/Employee_Tracker_App.png" alt="Employee Tracker"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Personal Diary</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>A personal diary that allow you to add, edit and delete notes.</p>
             </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">Bootstrap</p>
            <p className="badges">Heroku</p>
            
            <p className="badges">uuid</p>
            <p className="badges">express</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/Personal_Diary" rel="noreferrer">View
                        Personal Diary git
                        repo</a></li>
                <li><a target="_blank"
                        href="https://agile-badlands-99229.herokuapp.com/" rel="noreferrer">View
                        Deployed App</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/Personal-Diary.png"
                alt="Personal Diary"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>MERN Shopping List</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>Personal Cloud-based shopping list.</p>
            </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">React</p>
            <p className="badges">Reactstrap</p>
            <p className="badges">Heroku</p>
            <p className="badges">MVC</p>
            
            <p className="badges">uuid</p>
            <p className="badges">redux</p>
            <p className="badges">axios</p>
            <p className="badges">reduc-thunk</p>
            <p className="badges">express</p>
            <p className="badges">mongoose</p>
            <p className="badges">body-parser</p>
            <p className="badges">concurrently</p>
            <p className="badges">dotenv</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/shopping_list" rel="noreferrer">View
                    MERN Shopping List git
                        repo</a></li>
                <li><a target="_blank"
                        href="https://stormy-eyrie-55100.herokuapp.com/" rel="noreferrer">View
                        Deployed App</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/shopping_list.png"
                alt="MERN Shopping List"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Starwars</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>Build a list of your favourite Star Wars characters.</p>
            </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">Heroku</p>
            <p className="badges">Bootstrap</p>
            
            <p className="badges">cool-ascii-faces</p>
            <p className="badges">express</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/StarwarsApp" rel="noreferrer">View
                    Starwars git
                        repo</a></li>
                <li><a target="_blank"
                        href="https://serene-mountain-24194.herokuapp.com/" rel="noreferrer">View
                        Deployed App</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/starwars.png"
                alt="Starwars"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Hot Restaurant</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>A awsome app that allows you to search by band name, preview their music and see all upcoming
                events.</p> 
            </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">Heroku</p>
            <p className="badges">Bootstrap</p>
            
            <p className="badges">express</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>Simple app to book tables.</p>
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/hot_restaurant" rel="noreferrer">View
                    Hot Restaurant git
                        repo</a></li>
                <li><a target="_blank"
                        href="https://floating-shelf-09890.herokuapp.com/" rel="noreferrer">View
                        Deployed App</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/Hot_Restaurant.png"
                alt="Hot Restaurant"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Project Team Generator</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>A webpage generator that displays a team's basic info so that you have quick access to emails and
                GitHub profiles.</p>
            </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">Bootstrap</p>
            <p className="badges">Fontawesome</p>
            <p className="badges">jest</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/project_team_generator" rel="noreferrer">View
                        Project Team Generator git
                        repo</a></li>
                <li><a target="_blank"
                        href="https://drive.google.com/file/d/1Tpjjg77FdM1ZBVrWrFHGbx_14C7p-rxx/view" rel="noreferrer">View
                        Project Team Generator Demo</a></li>
                <li><a target="_blank" href="https://chrisjmckeown.github.io/project_team_generator/" rel="noreferrer">View a
                        preview output for Project Team Generator</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/Project_Team_Generator_HTML.png"
                alt="Project Team Generator"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Awesome Readme Generator</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>A command-line application that dynamically generates a professional README.md from a user's
                inputs.</p>
            </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">axios</p>
            <p className="badges">inquirer</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/Awesome_Readme_Generator" rel="noreferrer">View
                        Awesome Readme Generator git
                        repo</a></li>
                <li><a target="_blank"
                        href="https://drive.google.com/file/d/1i8v5VGjM_Tf2uhUgM3Bpje6rdlCbiOz-/view" rel="noreferrer">View
                        Awesome Readme Generator Demo</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/Awesome_Readme_Generator_Demo.png"
                alt="Awesome Readme Generator"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Weather Dashboard</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>This website provides access to current and future weather conditions.</p>
         </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">Moment</p>
            <p className="badges">Bootstrap</p>
            <p className="badges">Fontawesome</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://chrisjmckeown.github.io/Weather_Dashboard/" rel="noreferrer">View Weather
                        Dashboard live page</a></li>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/Weather_Dashboard" rel="noreferrer">View Weather
                        Dashboard git repo</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/weather_dashboard.png" alt="Weather Dashboard"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Code Quiz</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>This is a timed multiple-choice quiz on JavaScript fundamentals that stores the highest
            scores.</p>
        </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">Fontawesome</p>
        </div>
        <hr/>
        <div className="more-info-links">                    
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://chrisjmckeown.github.io/Code_Quiz/" rel="noreferrer">View Code Quiz live
                        page</a></li>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/Code_Quiz" rel="noreferrer">View Code Quiz git
                        repo</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/code-quiz.png" alt="Code Quiz"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Password Generator</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>This app generates a random password based on a set of user criteria.</p>
         </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">Fontawesome</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://chrisjmckeown.github.io/Password_Generator/" rel="noreferrer">View Password
                        Generator live page</a></li>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/Password_Generator" rel="noreferrer">View Password
                        Generator git repo</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/password-generator.png" alt="Password Generate"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>Work Day Scheduler</h2>
            <hr/>
        </div>
        <div className="desciption">
            <p>A simple calendar application that allows the you to save events for each hour of the day.
            </p>
        </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">Bootstrap</p>
            <p className="badges">Fontawesome</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://chrisjmckeown.github.io/Work_Day_Scheduler/" rel="noreferrer">View Work Day
                        Scheduler live page</a></li>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/Work_Day_Scheduler" rel="noreferrer">View Work Day
                        Scheduler git repo</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/work-day-scheduler.png" alt="Work Day Scheduler"/>
        </div>
    </section>
    <section className="portfolio">
        <div className="title">
            <hr/>
            <h2>New Your Times Search</h2>
            <hr/>
        </div>
        <div className="desciption">                   
            <p>A seach page for New York Times articles.</p>
         </div>
        <hr/>
        <div className="technologies-used">
            <p className="badges">HTML</p>
            <p className="badges">CSS3</p>
            <p className="badges">Node.js</p>
            <p className="badges">JavaScript</p>
            <p className="badges">JQuery</p>
            <p className="badges">AJAX</p>
            <p className="badges">Bootstrap</p>
            <p className="badges">Fontawesome</p>
        </div>
        <hr/>
        <div className="more-info-links">
            <p>For more info:</p>
            <ul>
                <li><a target="_blank" href="https://chrisjmckeown.github.io/New_Your_Times_Search/" rel="noreferrer">View New
                        Your Times Search live
                        page</a></li>
                <li><a target="_blank" href="https://github.com/chrisjmckeown/New_Your_Times_Search" rel="noreferrer">View New
                        Your Times Search git
                        repo</a></li>
            </ul>
        </div>
        <div className="zoom">
            <img className="portfolio-images" src="./Assets/Images/new-your-times-search.png"
                alt="New Your Times Search"/>
        </div>
    </section>
</div>
    );
}

export default Portfolio;