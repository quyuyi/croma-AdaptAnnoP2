import React from 'react';
import Select from 'react-select';
import Submit from './submit.jsx';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// const options = [
//     { value: 'id', label: 'what is the id' },
//     { value: 'imdb_id', label: 'what is the imdb id' },
//     // { value: 'title', label: 'title' },
//     { value: 'belongs_to_collection', label: 'what collection it belongs to' },
//     { value: 'budget', label: 'what is the budget range (A.0-50mil, B.50-100mil,...,F.>250mil)' },
//     { value: 'genres', label: 'name a genre' },
//     { value: 'homepage', label: 'what is the homepage' },
//     { value: 'original_language', label: 'what is the original language' },
//     // { value: 'original_title', label: 'original title' },
//     // { value: 'overview', label: 'what is the overview' },
//     { value: 'popularity', label: 'what is the popularity range (A.0-10,B.10-20,...,F.>50)' },
//     { value: 'poster_path', label: 'what is the poster path' },
//     { value: 'production_companies', label: 'name a production company' },
//     { value: 'production_countries', label: 'name a production country' },
//     { value: 'release_date', label: 'what is the release date range (A.before 1980,B.1980-1990,...,E.>2010)' },
//     { value: 'revenue', label: 'what is the revenue range (A.0-200mil,B.200-400mil,...,F.>1000mil)' },
//     { value: 'runtime', label: 'what is the runtime range (A.0-90min,B.200-400mil,...,E.>150min)' },
//     { value: 'spoken_languages', label: 'name a spoken language' },
//     { value: 'status', label: 'what is the status' },
//     { value: 'tagline', label: 'what is the tagline' },
//     { value: 'video', label: 'does it have videos' },
//     { value: 'vote_average', label: 'what is the vote average range (A.0-2,B.2-4,...,E.8-10)' },
//     { value: 'vote_count', label: 'what is the vote count range (A.0-2000,B.2000-4000,...,E.>8000)' },
//     { value: 'adult', label: 'is it only for adults' },
//     { value: 'characters', label: 'name a main character' },
//     { value: 'cast', label: 'name a main cast' },
//     { value: 'director', label: 'who is the director' },
//     { value: 'screenplay', label: 'who is the screenplay' },
//     { value: 'keywords', label: 'name a keyword listed on TMDB' },
// ]

const options = [{"id": 1, "feature": "what is the id", "entropy": 10.0, "rank": 1}, {"id": 2, "feature": "what is the imdb id", "entropy": 9.99903526098446, "rank": 2}, {"id": 3, "feature": "what is the poster path", "entropy": 9.951659214767707, "rank": 3}, {"id": 4, "feature": "name a main character", "entropy": 8.681619040973489, "rank": 4}, {"id": 5, "feature": "who is the director", "entropy": 8.538714850522197, "rank": 5}, {"id": 6, "feature": "name a main cast", "entropy": 8.323220986374375, "rank": 6}, {"id": 7, "feature": "name a production company", "entropy": 6.899768037733951, "rank": 7}, {"id": 8, "feature": "name a keyword listed on TMDB", "entropy": 6.226147892264789, "rank": 8}, {"id": 9, "feature": "what is the tagline", "entropy": 4.762238250154396, "rank": 9}, {"id": 10, "feature": "what is the release date range (A.before 1980,B.1980-1990,...,E.>2010)", "entropy": 3.765116874947182, "rank": 10}, {"id": 11, "feature": "who is the screenplay", "entropy": 3.392864359336299, "rank": 11}, {"id": 12, "feature": "name a production country", "entropy": 2.2821973582236765, "rank": 12}, {"id": 13, "feature": "name a spoken language", "entropy": 1.886305873911186, "rank": 13}, {"id": 14, "feature": "what is the homepage", "entropy": 1.857562757056457, "rank": 14}, {"id": 15, "feature": "name a genre", "entropy": 1.8162285974649153, "rank": 15}, {"id": 16, "feature": "what is the original language", "entropy": 1.3787059670243418, "rank": 16}, {"id": 17, "feature": "what is the runtime range (A.0-90min,B.200-400mil,...,E.>150min)", "entropy": 1.2190365403337091, "rank": 17}, {"id": 18, "feature": "what is the vote average range (A.0-2,B.2-4,...,E.8-10)", "entropy": 1.1027614918447388, "rank": 18}, {"id": 19, "feature": "what collection it belongs to", "entropy": 0.95743488041117, "rank": 19}, {"id": 20, "feature": "what is the popularity range (A.0-10,B.10-20,...,F.>50)", "entropy": 0.24910960271218396, "rank": 20}, {"id": 21, "feature": "what is the budget range (A.0-50mil, B.50-100mil,...,F.>250mil)", "entropy": 0.13132676109011207, "rank": 21}, {"id": 22, "feature": "what is the revenue range (A.0-200mil,B.200-400mil,...,F.>1000mil)", "entropy": 0.0852187485828623, "rank": 22}, {"id": 23, "feature": "vote_count", "entropy": 0.06585973614678141, "rank": 23}, {"id": 24, "feature": "what is the status", "entropy": 0.06206913313384368, "rank": 24}, {"id": 25, "feature": "does it have videos", "entropy": 0.012910327014149446, "rank": 25}, {"id": 26, "feature": "is it only for adults", "entropy": -0.0, "rank": 26}];
const optionAB = [{value:"A", label: "A"}, {value: "B", label: "B"}];

class Ask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            selectedOption: null,
            startTime: null,
            endTime: null,
            first: true,
            loading: false,
            showTest: true,
            showReal: false,
            showSubmit: false,
            tutorialAnsHelp: '',
            tutorialAnsEasy: '',
            reasoning: '',
            stage: 0,
            tutorialTrial: 1,
        };
    }

    componentDidMount() {
    }

    handleChange(e) {
        console.log(e)
        this.setState({ selectedOption : e.value });
      };


    onClickNext() {
        // let answerHelp = document.getElementById('testQuestionHelp').value;
        // let answerEasy = document.getElementById('testQuestionEasy').value;
        console.log(this.state.tutorialAnsHelp);
        if(this.state.tutorialAnsHelp != 'A' && this.state.tutorialAnsEasy != 'B'){
            // alert('Please answer the tutorial questions.');
            alert("Wrong answer for both questions.\n\n'What is the id of the movie' is more informative because it has a higher informativeness score shown in the table.\n\n'What is the spoken language of the movie' is the easier-to-answer question, because the spoken language of the movie is easy to remember and say.");
            this.setState({
                tutorialTrial: this.state.tutorialTrial+1,
            })
        } 
        else if (this.state.tutorialAnsHelp != 'A') {
            alert("Wrong answer for the first question.\n\n'What is the id of the movie' is more informative because it has a higher informativeness score shown in the table.");
            this.setState({
                tutorialTrial: this.state.tutorialTrial+1,
            })
        }
        else if (this.state.tutorialAnsEasy != 'B') {
            alert("Wrong answer for the second question.\n\n'What is the spoken language of the movie' is the easier-to-answer question, because the spoken language of the movie is easy to remember and say.");
            this.setState({
                tutorialTrial: this.state.tutorialTrial+1,
            })
        }
        else {
            this.props.handleShowTable(true, true)
            this.setState({ 
                showTest : false, 
                showReal: true, 
                stage: this.state.stage+1,
                // tutorialAnsHelp:answerHelp, 
                // tutorialAnsEasy:answerEasy, 
                startTime: new Date(),
             });
        }
    }

    renderIntro() {
        return (
            <div id='intro'>
                <h5>
                <p>
                        Tutorial
                </p>
                </h5>
                <p>
                    Each question is based on a metadata of a movie. Examples of metadata are id, overview, runtime, genre. Corresponding questions are: What is the id of the movie, what is the overview... etc.
                </p>
            </div>
        );
    }

    renderDefinitions() {
        return (
            <div id='definition'> 
                <h5>
                <p>
                Tutorial
                </p>
                </h5>
                <p>
                    {/* Imagine a person has just read about a movie from the TMDB (The Movie DataBase, an example screenshot of the site is shown below).  */}
                    A question is easy-to-answer if the information required to answer the question is <b>easy for a person to remember and say</b>. 
                    {/* Please refer to the screenshot to determine whether or not a question is easy-to-answer. */}
                </p>
                <p>
                    A question is more informative if it has a <b>higher informativeness score</b> as shown in the table below.
                {/* In the table below, we provided a score measuring how informative each question is. The <b>higher the score</b>, the <b>more informative</b> the question. */}
                </p>

                {/* <Row>
                    <Col>
                        {this.renderExperiences()}
                    </Col>
                </Row> */}

            </div>
        )
    }


    renderExperiences() {

        return (
            <div>

                <img id='posterImg' alt="Poster" src={'/get_gravity'} width='1000'/>
            </div>
        )
    }

    renderTestQuestion() {
        if(this.state.showTest){
            return(
                <div>
                    {/* <p>
                        Tutorial
                    </p> */}
                    {/* {this.renderDefinitions()} */}
                    <p>
                        Please answer the following 2 questions to pass the tutorial.
                    </p>
                    <p>
                        Among the questions below: 
                    </p>
                        <ul>
                            <li>A.What is the id of the movie</li>
                            <li>B.What is the spoken language of the movie</li>
                        </ul>
                    <p>Enter the more informative question (A or B)</p>
                    {/* <input autoFocus id='testQuestionHelp' type="text" /> */}
                    <Select id='testQuestionHelp' className='select'
                        options={optionAB}
                        onChange={e => {
                            this.setState({
                                tutorialAnsHelp: e.value,
                            })
                        }}
                    />

                    <p>Enter the easier-to-answer question (A or B)</p>
                    {/* <input id='testQuestionEasy' type="text" /> */}
                    <Select id='testQuestionEasy' className='select'
                        options={optionAB}
                        onChange={e => {
                            this.setState({
                                tutorialAnsEasy: e.value,
                            })
                        }}
                    />
                    {/* <p>Enter the more helpful question (A helpful question narrows down the 60 movies to a smaller list)</p>
                    <input autoFocus id='testQuestionHelp' type="text" />
                    <p>Enter the easier to answer question (Imagine you browsed the movie on TMDB last week)</p>
                    <input autoFocus id='testQuestionEasy' type="text" /> */}

                    {/* <Button block variant="secondary" onClick={()=>this.onClickNext()} >Next</Button> */}
    
                </div>
            )
        }
    }

    renderSubmit(){

        let finalResult = {
            tutorialAnsEasy: this.state.tutorialAnsEasy,
            tutorialAnsHelp: this.state.tutorialAnsHelp,
            selected: this.state.selectedOption,
            reasoning: this.state.reasoning,
            timeTaken: (this.state.endTime - this.state.startTime)/1000,
            tutorialTrial: this.state.tutorialTrial,
        }
        console.log(finalResult);

        if(this.state.showSubmit) {
            return (
                <div>
                    <p>
                        You have completed the task. Thank you!
                    </p>
                    <Submit
                    movieIndex="where to get movie index?"
                    result={finalResult}
                    condition={this.props.condition}
                    /> 
                </div>
            )
        }
    }

    showSubmit() {

        let reasoning = document.getElementById('reasoning').value;
        
        let checkList = document.getElementById("checkList").value;

        checkList = JSON.parse(checkList)
        
        let checked = []

        checkList.forEach((elem,i) => {
            if(elem) {
                checked.push(i)
            }
        })

        if(checked.length != 1) {
            alert("please choose one question by checking the box in the table.")
        } else if(reasoning == '') {
            alert("Please explain why do you think it’s easy-to-answer and informative.")
        } else {
            this.props.handleShowTable(false);
            this.setState({ showReal : false, 
                showSubmit: true, 
                endTime: new Date, 
                reasoning: reasoning,
                selectedOption: options[checked[0]],
                stage: this.state.stage+1,
            });
        }
        
    }

    renderRealQuestion() {
        
        if(this.state.showReal){
            return(
                <div>
                    <h5>
                    <p>Task</p>
                    </h5>
                    <p>
                    Please select an <b>easy-to-answer</b> and <b>informative</b> question by <b>checking a box in the table below</b>. Also, explain why think it’s easy-to-answer and informative in the input box. We will review your response and approve the qualified responses.
                    </p>

                    {/* <Select
                        onChange={this.handleChange.bind(this)}
                        options={options}
                    /> */}
                    <textarea className="form-control" id="reasoning" rows="3"
                    placeholder="Explain why you think it’s easy-to-answer and informative"></textarea>
                    {/* <input id='reasoning' type="text" placeholder="Explain why you think it’s easy-to-answer and informative"/> */}

                    {/* <Button block variant="secondary" onClick={()=>this.showSubmit()} >Next</Button> */}

                </div>
            )
        }
    }

    handleNext() {
        const new_stage = this.state.stage+1;
        if (new_stage == 1){
            this.props.handleShowTable(true, false);
        }
        this.setState({
            stage: new_stage,
        })
        
    }


    render(){
        if (this.state.stage == 0){
            return (
                <div>
                    <br></br>
                    <div className='questions-header'>
                    {this.renderDefinitions()}
                    </div>
                    <Button block variant="secondary" id='next' onClick={()=>this.handleNext()} >Next</Button>
                </div>
            );
        }
        else if (this.state.stage == 1){
            return (
                <div>
                    <br></br>
                    {this.renderDefinitions()}
                    <div className='questions-header'>
                    {this.renderTestQuestion()}
                    </div>
                    <Button block variant="secondary" onClick={()=>this.onClickNext()} >Next</Button>
                </div>
            );
        }
        else if (this.state.stage == 2){
            return (
                <div>
                    <br></br>
                    {this.renderDefinitions()}
                    <br></br>
                    <div className='questions-header'>
                        {this.renderRealQuestion()}
                    </div>
                    <Button block variant="secondary" onClick={()=>this.showSubmit()} >Next</Button>
                </div>
            );
        }
        else if (this.state.stage == 3){
            return (
                <div>
                {this.renderSubmit()}
                </div>
            );
            
        }
        // return (
        //     <div>

        //         {this.renderTestQuestion()}
        //         {this.renderRealQuestion()}
        //         {this.renderSubmit()}
        //     </div>
        // );
    }
}

export default Ask;