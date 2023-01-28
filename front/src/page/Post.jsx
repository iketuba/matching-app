import React from 'react';
import db from '../firebase';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            lang: '',
            time: '',
            content: '',
            sns: '',
        };
    }

    handleTitleChange(event) {
        const inputValue = event.target.value;
        this.setState({
            title: inputValue
        });
    }

    handleDescriptionChange(event) {
        const inputValue = event.target.value;
        this.setState({
            description: inputValue
        });
    }

    handleLangChange(event) {
        const inputValue = event.target.value;
        this.setState({
            lang: inputValue
        });
    }

    handleTimeChange(event) {
        const inputValue = event.target.value;
        this.setState({
            time: inputValue
        });
    }

    handleContentChange(event) {
        const inputValue = event.target.value;
        this.setState({
            content: inputValue
        });
    }

    handleSNSChange(event){
        const inputValue = event.target.value;
        this.setState({
            sns: inputValue
        });
    }

    handleSubmit() {

    }

    render() {
        return (
            <div className='create-post'>
                <form onSubmit={() => {this.handleSubmit()}} >
                    <p>タイトル</p>
                    <input
                        value={this.state.title}
                        onChange={(event) => {this.handleTitleChange(event)}}
                    />
                    <p>説明</p>
                    <textarea
                        value={this.state.description}
                        onChange={(event) => {this.handleDescriptionChange(event)}}
                    />
                    <p>使用言語</p>
                    <input
                        value={this.state.lang}
                        onChange={(event) => {this.handleLangChange(event)}}
                    />
                    <p>時間</p>
                    <input 
                        value={this.state.time}
                        onChange={(event) => {this.handleTimeChange(event)}}
                    />
                    <p>募集内容</p>
                    <textarea
                        value={this.state.content}
                        onChange={(event) => {this.handleContentChange(event)}}
                    />
                    <p>SNS URL</p>
                    <input
                        value={this.state.sns}
                        onChange={(event) => {this.handleSNSChange(event)}}
                    />
                    <input
                        type='submit'
                        value='新規作成'
                    />
                </form>
            </div>
        )
    }
}

export default Post;