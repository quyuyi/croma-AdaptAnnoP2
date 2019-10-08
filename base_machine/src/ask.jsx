import React from 'react';
import Select from 'react-select';
import Submit from './submit.jsx';
import Button from 'react-bootstrap/Button';


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
            testAnswer: ''
        };
    }

    componentDidMount() {
    }

    handleChange(e) {
        console.log(e)
        this.setState({ selectedOption : e.value });
      };

    onClickNext() {
        let answer = document.getElementById('testQuestion').value
        if(answer == ''){
            alert('Please input an answer to proceed')
        } else {
            this.setState({ showTest : false, showReal: true, testAnswer:answer, startTime: new Date() });
        }
    }

    renderTestQuestion() {
        if(this.state.showTest){
            return(
                <div>
                    <p>
                        To test your understanding, please list the 3 most useful questions based on the ranking. 
                    </p>
                    <input autoFocus id='testQuestion' type="text" />
                    <Button variant="secondary" onClick={()=>this.onClickNext()} >Next</Button>
    
                </div>
            )
        }
    }

    renderSubmit(){

        let finalResult = {
            testAnswer: this.state.testAnswer,
            selected: this.state.selectedOption,
            timeTaken: (this.state.endTime - this.state.startTime)/1000
        }

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
        this.setState({ showReal : false, showSubmit: true, endTime: new Date });
    }

    renderRealQuestion() {
        const options = [
            { value: 'id', label: 'what is the id' },
            { value: 'imdb_id', label: 'what is the imdb id' },
            // { value: 'title', label: 'title' },
            { value: 'belongs_to_collection', label: 'what collection it belongs to' },
            { value: 'budget', label: 'what is the budget range (A.0-50mil, B.50-100mil,...,F.>250mil)' },
            { value: 'genres', label: 'name a genre' },
            { value: 'homepage', label: 'what is the homepage' },
            { value: 'original_language', label: 'what is the original language' },
            // { value: 'original_title', label: 'original title' },
            // { value: 'overview', label: 'what is the overview' },
            { value: 'popularity', label: 'what is the popularity range (A.0-10,B.10-20,...,F.>50)' },
            { value: 'poster_path', label: 'what is the poster path' },
            { value: 'production_companies', label: 'name a production company' },
            { value: 'production_countries', label: 'name a production country' },
            { value: 'release_date', label: 'what is the release date range (A.before 1980,B.1980-1990,...,E.>2010)' },
            { value: 'revenue', label: 'what is the revenue range (A.0-200mil,B.200-400mil,...,F.>1000mil)' },
            { value: 'runtime', label: 'what is the runtime range (A.0-90min,B.200-400mil,...,E.>150min)' },
            { value: 'spoken_languages', label: 'name a spoken language' },
            { value: 'status', label: 'what is the status' },
            { value: 'tagline', label: 'what is the tagline' },
            { value: 'video', label: 'does it have videos' },
            { value: 'vote_average', label: 'what is the vote average range (A.0-2,B.2-4,...,E.8-10)' },
            { value: 'vote_count', label: 'what is the vote count range (A.0-2000,B.2000-4000,...,E.>8000)' },
            { value: 'adult', label: 'is it only for adults' },
            { value: 'characters', label: 'name a main character' },
            { value: 'cast', label: 'name a main cast' },
            { value: 'director', label: 'who is the director' },
            { value: 'screenplay', label: 'who is the screenplay' },
            { value: 'keywords', label: 'name a keyword listed on TMDB' },
        ]
        if(this.state.showReal){
            return(
                <div>
                    <p>
                    Click on the dropdown to select a question. (Hint: Go down the ranking and choose one that's useful but also easy to answer)
                    </p>
                    <Select
                        onChange={this.handleChange.bind(this)}
                        options={options}
                    />

                    <Button variant="secondary" onClick={()=>this.showSubmit()} >Next</Button>

                </div>
            )
        }
    }

    render(){

        return (
            <div>

                {this.renderTestQuestion()}
                {this.renderRealQuestion()}
                {this.renderSubmit()}
            </div>
        );
    }
}

export default Ask;