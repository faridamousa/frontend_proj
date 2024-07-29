import { Box } from "@mui/material";
import { Bar } from "./Bar";
export const Home = () => {
  return (
    <>
      <Bar setName={() => {}} />
      <Box
        sx={{
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          lineHeight: "1.5",
          padding: "16px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h1>Rick and Morty</h1>
        <p>
          <em>Rick and Morty</em> is an acclaimed animated television series
          that premiered on Adult Swim in 2013. Created by Justin Roiland and
          Dan Harmon, the show follows the bizarre and darkly comedic adventures
          of an eccentric and alcoholic scientist named Rick Sanchez and his
          good-hearted but easily influenced grandson Morty Smith.
        </p>

        <h2>Main Characters</h2>
        <ul>
          <li>
            <strong>Rick Sanchez</strong>: A genius scientist with a nihilistic
            worldview, Rick is capable of creating advanced gadgets and
            traveling across dimensions. His reckless behavior often puts him
            and his family in dangerous situations.
          </li>
          <li>
            <strong>Morty Smith</strong>: Rick's 14-year-old grandson, who often
            serves as a moral counterbalance to Rick's unrestrained antics.
            Despite his nervous and apprehensive nature, Morty is frequently
            dragged into Rick's escapades.
          </li>
          <li>
            <strong>Summer Smith</strong>: Morty's older sister, who
            occasionally joins Rick and Morty on their adventures. She is more
            socially aware and assertive than Morty.
          </li>
          <li>
            <strong>Beth Smith</strong>: Rick's daughter and Morty's mother, who
            works as a horse surgeon. She has a complex relationship with Rick,
            often seeking his approval while also dealing with the fallout of
            his actions.
          </li>
          <li>
            <strong>Jerry Smith</strong>: Beth's husband and Morty's father,
            often portrayed as insecure and somewhat incompetent. His strained
            relationship with Beth and Rick provides additional comedic and
            dramatic tension.
          </li>
        </ul>

        <h2>Plot and Themes</h2>
        <p>
          The show explores a wide range of science fiction themes, including
          alternate dimensions, time travel, and intergalactic adventures. Each
          episode typically blends absurd humor with philosophical musings,
          often tackling existential questions and the nature of reality. The
          series is known for its sharp wit, dark humor, and satirical take on
          various aspects of pop culture and science fiction tropes.
        </p>

        <h2>Reception</h2>
        <p>
          <em>Rick and Morty</em> has received widespread critical acclaim for
          its originality, creativity, and depth. It has garnered a dedicated
          fanbase and has been praised for its writing, voice acting, and
          ability to balance humor with thought-provoking concepts. The show's
          influence has extended beyond television, inspiring various
          merchandise, comics, and even video games.
        </p>

        <p>
          Overall, <em>Rick and Morty</em> stands out as a significant and
          influential series in contemporary animation, known for pushing
          boundaries and challenging conventional storytelling.
        </p>
      </Box>
    </>
  );
};
