"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import CommentSection from "@/components/CommentSection";


const posts = [
  {  
    id: '1',
    title: "Harry Potter and the Sorcerer's Stone (2001)",
    history: "Based on J.K. Rowling's famous Harry Potter novel, the film was directed by Chris Columbus, starring Daniel Radcliffe (Harry Potter), Rupert Grint (Ron Weasley), and Emma Watson (Hermione Granger). The film follows Harry Potter, an orphaned boy who discovers on his 11th birthday that he is a wizard. He receives an invitation to attend Hogwarts School of Witchcraft and Wizardry, where he makes friends, uncovers magical secrets, and faces the dark wizard who killed his parents. Directed by Chris Columbus, the film was praised for its faithful adaptation of the beloved book and its casting choices. The young leads' performances were well-received, particularly Daniel Radcliffe's portrayal of Harry. The movie was a massive box office success, grossing over $1 billion worldwide, and it laid the foundation for a cinematic phenomenon that would continue with seven more films, cementing the Harry Potter series as one of the most successful franchises in film history.",
  },
  {
    id: '2',
    title: "Harry Potter and the Chamber of Secrets (2002)",
    history: "Directed by Chris Columbus, the second installment in the series, *Harry Potter and the Chamber of Secrets*, sees Harry returning to Hogwarts for his second year. This time, a mysterious creature has been terrorizing the school, petrifying students, and leaving cryptic messages on the walls. With the help of his friends Ron and Hermione, Harry uncovers the truth about the Chamber of Secrets and confronts a young Tom Riddle, the future Lord Voldemort. The movie expands the magical world, introduces new characters such as Gilderoy Lockhart (played by Kenneth Branagh), and features the flying car and giant spiders, making it one of the more action-packed entries in the series. The film was once again a huge box office success and solidified the growing fandom around the franchise.",
  },
  {
    id: '3',
    title: "Harry Potter and the Prisoner of Azkaban (2004)",
    history: "Directed by Alfonso Cuarón, *Harry Potter and the Prisoner of Azkaban* marks a darker, more mature turn for the series. The film introduces the character of Sirius Black (played by Gary Oldman), a fugitive from the wizarding prison of Azkaban, who is believed to have betrayed Harry's parents to Voldemort. As Harry and his friends investigate, they discover shocking truths about Sirius and his connection to Harry’s past. The film is notable for its new, more artistic direction, with Cuarón bringing a unique visual style to the series, including the introduction of time travel through the use of Hermione’s Time-Turner. The shift in tone was praised by critics, and the movie was a commercial hit, continuing the success of the franchise.",
  },
  {
    id: '4',
    title: "Harry Potter and the Goblet of Fire (2005)",
    history: "Directed by Mike Newell, *Harry Potter and the Goblet of Fire* is the fourth film in the series and features the exciting Triwizard Tournament. Harry competes against other magical students from different schools and faces deadly tasks while uncovering a plot involving dark forces and the return of Lord Voldemort. The movie is action-packed and emotionally intense, as it introduces more serious themes of death, betrayal, and the rise of evil. The death of Cedric Diggory (played by Robert Pattinson) serves as a turning point, marking the beginning of Voldemort’s resurgence. The film’s impressive set pieces, including the dragon chase and the underwater challenges, along with a dark turn in the storyline, made this one of the most thrilling films in the series.",
  },
  {
    id: '5',
    title: "Harry Potter and the Order of the Phoenix (2007)",
    history: "Directed by David Yates, *Harry Potter and the Order of the Phoenix* introduces a more political and rebellious tone as Harry struggles with his growing responsibilities and the growing threat of Voldemort's return. In this film, Harry and his friends form 'Dumbledore's Army' to learn defense against the dark arts in secret, while the Ministry of Magic refuses to acknowledge the return of Voldemort. The film also explores Harry's deepening connection to his past and his destiny as the one who must defeat Voldemort. The introduction of the character of Dolores Umbridge (played by Imelda Staunton), the tyrannical new Defense Against the Dark Arts teacher, brings a new layer of conflict and tension to the story. This darker and more emotional entry was praised for its mature themes and set the stage for the final confrontations in the series.",
  },
  {
    id: '6',
    title: "Harry Potter and the Half-Blood Prince (2009)",
    history: "Directed by David Yates, *Harry Potter and the Half-Blood Prince* delves into Harry’s quest to find and destroy Voldemort’s Horcruxes, the key to his immortality. This movie is particularly notable for its emotional depth, focusing on the growing relationship between Harry and Ginny Weasley, and the tragic death of **Albus Dumbledore** (played by Michael Gambon). The discovery of Dumbledore’s past and his search for the Dark Lord’s secrets adds complexity to the story, while the impending sense of doom sets up the final battle. The film also marks a shift toward a more somber and serious tone, as the war against Voldemort escalates. With its heart-wrenching moments and a sense of inevitable loss, this film intensifies the emotional stakes and prepares the stage for the final showdown between Harry and Voldemort.",
  }
 
];

export default function Post() {
  const [post, setPost] = useState<{ id: string; title: string; history: string } | null>(null);
  const params = useParams(); 

  
  useEffect(() => {
    
    if (params && params.id) {
      const foundPost = posts.find((p) => p.id === params.id);
      setPost(foundPost || null); 
    }
  }, [params]); 

  
  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10 text-black ">
        Post Not Found
      </h2>
    );
  }

  
  const renderParagraphs = (history: string) => {
    return history.split("\n").map((para, index) => (
      <p key={index} className=" mt-4 text-justify text-black">
        {para.trim()}
      </p> 
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-lg shadow-xl">
      <h1 className="text-4xl font-extrabold text-black text-center transform hover:scale-105 transition-transform duration-500">
        {post.title}
      </h1>

      <div className="mt-8 text-lg text-black">
        {renderParagraphs(post.history)}
      </div>

      <CommentSection postId={post.id} />
   
    </div>
  );
}




















