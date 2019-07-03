import { Meteor } from 'meteor/meteor';
import Links from '/imports/api/links';
import Instances from '../imports/api/instances';
import Heuristics from '../imports/api/heuristics';

function insertLink(title, url) {
  Links.insert({ title, url, createdAt: new Date() });
}

function insertInstance(text,label){
  Instances.insert({text,label,heuristics,createdAt: new Date() });
}


Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (Links.find().count() === 0) {
    insertLink(
      'Do the Tutorial',
      'https://www.meteor.com/tutorials/react/creating-an-app'
    );

    insertLink(
      'Follow the Guide',
      'http://guide.meteor.com'
    );

    insertLink(
      'Read the Docs',
      'https://docs.meteor.com'
    );

    insertLink(
      'Discussions',
      'https://forums.meteor.com'
    );
  }

  if (Instances.find().count() === 0) {
    insertInstance(
      "Bromwell High is a cartoon comedy. It ran at the same time as some other programs about school life, such as 'Teachers'. My 35 years in the teaching profession lead me to believe that Bromwell High's satire is much closer to reality than is 'Teachers'. The scramble to survive financially, the insightful students who can see right through their pathetic teachers' pomp, the pettiness of the whole situation, all remind me of the schools I knew and their students. When I saw the episode in which a student repeatedly tried to burn down the school, I immediately recalled ......... at .......... High. A classic line: INSPECTOR: I'm here to sack one of your teachers. STUDENT: Welcome to Bromwell High. I expect that many adults of my age think that Bromwell High is far fetched. What a pity that it isn't!",
      "pos",
      "",
    );

    insertInstance(
      "If you like adult comedy cartoons, like South Park, then this is nearly a similar format about the small adventures of three teenage girls at Bromwell High. Keisha, Natella and Latrina have given exploding sweets and behaved like bitches, I think Keisha is a good leader. There are also small stories going on with the teachers of the school. There's the idiotic principal, Mr. Bip, the nervous Maths teacher and many others. The cast is also fantastic, Lenny Henry's Gina Yashere, EastEnders Chrissie Watts, Tracy-Ann Oberman, Smack The Pony's Doon Mackichan, Dead Ringers' Mark Perry and Blunder's Nina Conti. I didn't know this came from Canada, but it is very good. Very good!",
      "pos",
      "",
    );

    insertInstance(
      "Bromwell High is nothing short of brilliant. Expertly scripted and perfectly delivered, this searing parody of a students and teachers at a South London Public School leaves you literally rolling with laughter. It's vulgar, provocative, witty and sharp. The characters are a superbly caricatured cross section of British society (or to be more accurate, of any society). Following the escapades of Keisha, Latrina and Natella, our three 'protagonists' for want of a better term, the show doesn't shy away from parodying every imaginable subject. Political correctness flies out the window in every episode. If you enjoy shows that aren't afraid to poke fun of every taboo subject imaginable, then Bromwell High will not disappoint!",
      "pos",
      "",
    );

    insertInstance(
      "'All the world's a stage and its people actors in it'--or something like that. Who the hell said that theatre stopped at the orchestra pit--or even at the theatre door? Why is not the audience participants in the theatrical experience, including the story itself?<br /><br />This film was a grand experiment that said: 'Hey! the story is you and it needs more than your attention, it needs your active participation'. 'Sometimes we bring the story to you, sometimes you have to go to the story.'<br /><br />Alas no one listened, but that does not mean it should not have been said.",
      "pos",
      "",
    );

    insertInstance(
      "FUTZ is the only show preserved from the experimental theatre movement in New York in the 1960s (the origins of Off Off Broadway). Though it's not for everyone, it is a genuinely brilliant, darkly funny, even more often deeply disturbing tale about love, sex, personal liberty, and revenge, a serious morality tale even more relevant now in a time when Congress wants to outlaw gay marriage by trashing our Constitution. The story is not about being gay, though -- it's about love and sex that don't conform to social norms and therefore must be removed through violence and hate. On the surface, it tells the story of a man who falls in love with a pig, but like any great fable, it's not really about animals, it's about something bigger -- stifling conformity in America.<br /><br />The stage version won international acclaim in its original production, it toured the U.S. and Europe, and with others of its kind, influenced almost all theatre that came after it. Luckily, we have preserved here the show pretty much as it was originally conceived, with the original cast and original director, Tom O'Horgan (who also directed HAIR and Jesus Christ Superstar on Broadway).<br /><br />This is not a mainstream, easy-to-take, studio film -- this is an aggressive, unsettling, glorious, deeply emotional, wildly imaginative piece of storytelling that you'll never forget. And it just might change the way you see the world...",
      "pos",
      "",
    );

    insertInstance(
      "Story of a man who has unnatural feelings for a pig. Starts out with a opening scene that is a terrific example of absurd comedy. A formal orchestra audience is turned into an insane, violent mob by the crazy chantings of it's singers. Unfortunately it stays absurd the WHOLE time with no general narrative eventually making it just too off putting. Even those from the era should be turned off. The cryptic dialogue would make Shakespeare seem easy to a third grader. On a technical level it's better than you might think with some good cinematography by future great Vilmos Zsigmond. Future stars Sally Kirkland and Frederic Forrest can be seen briefly.",
      "neg",
      "",
    );

    insertInstance(
      "Robert DeNiro plays the most unbelievably intelligent illiterate of all time. This movie is so wasteful of talent, it is truly disgusting. The script is unbelievable. The dialog is unbelievable. Jane Fonda's character is a caricature of herself, and not a funny one. The movie moves at a snail's pace, is photographed in an ill-advised manner, and is insufferably preachy. It also plugs in every cliche in the book. Swoozie Kurtz is excellent in a supporting role, but so what?<br /><br />Equally annoying is this new IMDB rule of requiring ten lines for every review. When a movie is this worthless, it doesn't require ten lines of text to let other readers know that it is a waste of time and tape. Avoid this movie.",
      "neg",
      "",
    );

    insertInstance(
      "I saw the capsule comment said 'great acting.' In my opinion, these are two great actors giving horrible performances, and with zero chemistry with one another, for a great director in his all-time worst effort. Robert De Niro has to be the most ingenious and insightful illiterate of all time. Jane Fonda's performance uncomfortably drifts all over the map as she clearly has no handle on this character, mostly because the character is so poorly written. Molasses-like would be too swift an adjective for this film's excruciating pacing. Although the film's intent is to be an uplifting story of curing illiteracy, watching it is a true 'bummer.' I give it 1 out of 10, truly one of the worst 20 movies for its budget level that I have ever seen.",
      "neg",
      "",
    );

    insertInstance(
      "If I had not read Pat Barker's 'Union Street' before seeing this film, I would have liked it. Unfortuntately this is not the case. It is actually my kind of film, it is well made, and in no way do I want to say otherwise, but as an adaptation, it fails from every angle.<br /><br />The harrowing novel about the reality of living in a northern England working-class area grabbed hold of my heartstrings and refused to let go for weeks after I had finished. I was put through tears, repulsion, shock, anger, sympathy and misery when reading about the women of Union Street. Excellent. A novel that at times I felt I could not read any more of, but I novel I simply couldn't put down. Depressing yes, but utterly gripping.<br /><br />The film. Oh dear. Hollywood took Barker's truth and reality, and showered a layer of sweet icing sugar over the top of it. A beautiful film, an inspiring soundtrack, excellent performances, a tale of hope and romance...yes. An adaptation of 'Union Street'...no.<br /><br />The women of Union Street and their stories are condensed into Fonda's character, their stories are touched on, but many are discarded. I accept that some of Barker's tales are sensitive issues and are too horrific for mass viewing, and that a film with around 7 leading protagonists just isn't practical, but the content is not my main issue. The essence and the real gut of the novel is lost - darkness and rain, broken windows covered with cardboard, and the graphically described stench of poverty is replaced with sunshine, pretty houses, and a twinkling William's score.<br /><br />If you enjoyed the film for its positivity and hope in the face of 'reality', I advise that you hesitate to read the book without first preparing yourself for something more like 'Schindler's List'...but without the happy ending.",
      "neg",
      "",
    );

    insertInstance(
      "This fanciful horror flick has Vincent Price playing a mad magician that realizes his vocational talents have been sold to another. He devise ways of avenging all those that have wronged him. His master scheme seems to back fire on him.<br /><br />Price is a little below par compared to his masterpieces, but is still the only reason to watch this thriller. Supporting cast includes Patrick O'Neal, Mary Murphy, Eva Gabor and Jay Novello.<br /><br />",
      "neg",
      "",
    );
  }
});


