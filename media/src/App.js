import logo from "./logo.svg";
import "./App.css";
import wednesday from "./images/wednesday.jpeg";
import wednesdayTrailer from "./videos/wednesdayTrailer.mp4";
import wednesdayMusic from "./audios/wednesdayMusic.mp3";

function App() {
  return (
    <div className="App">
      <h1>Harry Potter image from internet</h1>
      <img src="https://wallpapercave.com/wp/wp4543113.jpg"></img>
      <p>
        Harry Potter is a series of seven fantasy novels written by British
        author J. K. Rowling. The novels chronicle the lives of a young wizard,
        Harry Potter, and his friends Hermione Granger and Ron Weasley, all of
        whom are students at Hogwarts School of Witchcraft and Wizardry. The
        main story arc concerns Harry's conflict with Lord Voldemort, a dark
        wizard who intends to become immortal, overthrow the wizard governing
        body known as the Ministry of Magic, and subjugate all wizards and
        Muggles (non-magical people).
        <br></br>
        The series was originally published in English by Bloomsbury in the
        United Kingdom and Scholastic Press in the United States. A series of
        many genres, including fantasy, drama, coming-of-age fiction, and the
        British school story (which includes elements of mystery, thriller,
        adventure, horror, and romance), the world of Harry Potter explores
        numerous themes and includes many cultural meanings and references.Major
        themes in the series include prejudice, corruption, madness, and death.
        The series was originally published in English by Bloomsbury in the
        United Kingdom and Scholastic Press in the United States.
        <br></br>A series of many genres, including fantasy, drama,
        coming-of-age fiction, and the British school story (which includes
        elements of mystery, thriller, adventure, horror, and romance), the
        world of Harry Potter explores numerous themes and includes many
        cultural meanings and references. Major themes in the series include
        prejudice, corruption, madness, and death. The original seven books were
        adapted into an eight-part namesake film series by Warner Bros. In 2016,
        the total value of the Harry Potter franchise was estimated at $25
        billion,making Harry Potter one of the highest-grossing media franchises
        of all time. Harry Potter and the Cursed Child is a play based on a
        story co-written by Rowling. The success of the books and films has
        allowed the Harry Potter franchise to expand with
      </p>
      numerous derivative works, a travelling exhibition that premiered in
      Chicago in 2009, a studio tour in London that opened in 2012, a digital
      platform on which J. K. Rowling updates the series with new information
      and insight, and a trilogy of spin-off films premiering in November 2016
      with Fantastic Beasts and Where to Find Them, among many other
      developments. Themed attractions, collectively known as The Wizarding
      World of Harry Potter, have been built at several Universal Destinations &
      Experiences amusement parks around the world.
      <br></br>
      <h2>Harry Potter Trailer</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9eGwOuyKu1U?si=lAW5iLCT7FqgIkA_"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        autoPlay muted
      ></iframe>
      <h2>Audio from internet</h2>
      <audio
        src="https://services.brninfotech.com/tws/media2/songs/Gang Leader/04 - Gangu Leader.mp3"
        controls
      ></audio>
      <hr></hr>
      <h1>Wednesday image using local src</h1>
      <p>
        Wednesday is an American coming-of-age supernatural mystery television
        series based on the character Wednesday Addams by Charles Addams.
        Created by Alfred Gough and Miles Millar, it stars Jenna Ortega as the
        titular character, with Gwendoline Christie, Riki Lindhome, Jamie
        McShane, Hunter Doohan, Percy Hynes White, Emma Myers, Joy Sunday,
        Georgie Farmer, Naomi J. Ogawa, Christina Ricci, and Moosa Mostafa
        appearing in supporting roles. Four out of the eight episodes of the
        first season were directed by Tim Burton, who also serves as executive
        producer. It revolves around Wednesday Addams, who attempts to solve a
        murder mystery at her new school.[2]
        <br></br>
        Burton was previously approached to direct the 1991 film The Addams
        Family and was involved with a cancelled stop-motion animated The Addams
        Family film. In October 2020, he was reported to be helming a television
        series, which was later given a series order by Netflix. Ortega was cast
        in part to represent the character's Latina heritage. Ricci, who had
        played the titular character in the 1991 film and its 1993 sequel Addams
        Family Values, was asked by Burton to join the series in a supporting
        role. Filming took place in Romania between September 2021 and March
        2022.
        <br></br>
        Wednesday premiered on November 16, 2022, and was released on Netflix on
        November 23 to predominantly positive reviews from critics, who praised
        Ortega's performance.[3] Within three weeks of release, it became the
        second-most watched English-language Netflix series. It received two
        Golden Globe nominations: Best Television Series - Musical or Comedy and
        Best Actress - Television
      </p>
      <img src={wednesday}></img>
      Series Musical or Comedy for Ortega. It also won four PrimetimeEmmy
      Awards, while receiving nominations for Outstanding Comedy Series and
      Outstanding Lead Actress in a Comedy Series. In January 2023, the series
      was renewed for a second season.
      <br></br>
      <h2>Wednesday Trailer</h2>
      <video src={wednesdayTrailer} controls autoPlay muted></video>
      <h2>Wednesday Song</h2>
      <audio src={wednesdayMusic} controls></audio>
      <hr></hr>
      <h1>IPL image using local public</h1>
      <img src="./images/ipl-2024.jpg"></img>
      <p>
        The 2024 Indian Premier League (also known as IPL 17 and branded as TATA
        IPL 2024) was the 17th edition of the Indian Premier League, a franchise
        Twenty20 cricket league in India, organized by the Board of Control for
        Cricket in India. The tournament featured ten teams competing in 74
        matches from 22 March to 26 May 2024. It was held across 13 cities in
        India, with Chennai hosting the opening ceremony and the final. Chennai
        Super Kings were the defending champions, having won their fifth title
        during the previous season after beating Gujarat Titans. In the final,
        Kolkata Knight Riders defeated Sunrisers Hyderabad by 8 wickets to win
        their third IPL title.
        <br></br>
        <h3>Format</h3>
        <hr></hr>
        The format returned to the same as 2022, unlike 2023, with changes in
        group order. Each team will be playing twice against the teams in their
        group, against the team in the same row in the other group, and once
        against the remaining four teams in the other group.[2][3] After the
        group stage, the top four teams based on aggregate points qualified for
        the playoffs. In this stage, the top two teams
      </p>
      compete with each other (in a match titled "Qualifier 1"), as do the
      remaining two teams (in a match titled "Eliminator"). While the winner of
      Qualifier 1 directly qualified for the final match, the losing team has
      another chance to qualify for the final match by competing against the
      winning team of the Eliminator match (in a match titled "Qualifier 2").
      The winner of this subsequent Qualifier 2 match will move on to the final
      match. The team that wins the final match will be crowned the Indian
      Premier League winners.
      <br></br>
      <h2>IPL Trailer</h2>
      <video src="./videos/ipl.mp4" controls autoPlay muted></video>
      <h2>IPL Music</h2>
      <audio src="./audios/IPLMusic.mp3" controls></audio>
    </div>
  );
}

export default App;
