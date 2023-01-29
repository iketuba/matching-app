import { collection, addDoc, Timestamp } from 'firebase/firestore';
import React from 'react';
import db from '../firebase';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            lang: '',
            // time: "2023/01/29",
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
            lang: inputValue,
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
        const data = {
            title: this.state.title,
            description: this.state.description,
            lang: this.state.lang,
            // time: new Date(this.state.time),
            content: this.state.content,
            sns: this.state.sns
        };
        console.log(this.state.lang)
        const docRef = addDoc(collection(db, "post"), data);
        console.log("Document written with ID: ", docRef.id);
    }

    render() {
        return (
            <div className='create-post'>
                <h1 className='post-ttl'>新規作成画面</h1>
                <form onSubmit={() => {this.handleSubmit()}} >
                    <table className='post-table'>
                        <tr>
                            <th className='post-item'>タイトル</th>
                            <td className='post-body'>
                                <input
                                    className='post-text'
                                    value={this.state.title}
                                    onChange={(event) => {this.handleTitleChange(event)}}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className='post-item'>説明</th>
                            <td className='post-body'>
                                <textarea
                                    className='post-textarea'
                                    value={this.state.description}
                                    onChange={(event) => {this.handleDescriptionChange(event)}}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th class='post-item'>使用言語</th>
                            <td class='post-body'>
                                <input
                                    className='post-text'
                                    value={this.state.lang}
                                    onChange={(event) => {this.handleLangChange(event)}}
                                />
                            </td>
                        </tr>
                        {/* <tr>
                            <th className='post-item'>使用言語</th>
                            <td className='post-body'>
                                <label className='post-lang'>
                                    <input type='checkbox' name='言語' id='py'/>
                                    <span className='post-lang-txt'>Python</span>
                                </label>
                                <label className='post-lang'>
                                    <input type='checkbox' name='言語' id='js'/>
                                    <span className='post-lang-txt'>JavaScript</span>
                                </label>
                                <label className='post-lang'>
                                    <input type='checkbox' name='言語' id='rb'/>
                                    <span className='post-lang-txt'>Ruby</span>
                                </label>
                                <label className='post-lang'>
                                    <input type='checkbox' name='言語' id='go'/>
                                    <span className='post-lang-txt'>Go</span>
                                </label>
                                <label className='post-lang'>
                                    <input type='checkbox' name='言語' id='php'/>
                                    <span className='post-lang-txt'>PHP</span>
                                </label>
                                <label className='post-lang'>
                                    <input type='checkbox' name='言語' id='ja'/>
                                    <span className='post-lang-txt'>Java</span>
                                </label>
                                <label className='post-lang'>
                                    <input type='checkbox' name='言語' id='ko'/>
                                    <span className='post-lang-txt'>Kotlin</span>
                                </label>
                                <label className='post-lang'>
                                    <input type='checkbox' name='言語' id='sw'/>
                                    <span className='post-lang-txt'>Swift</span>
                                </label>
                            </td>
                        </tr> */}
                        {/* <tr>
                            <th class='post-item'>時間</th>
                            <td class='post-body'>
                                <input 
                                    type='date'
                                    value={this.state.time}
                                    onChange={(event) => {this.handleTimeChange(event)}}
                                />
                            </td>
                        </tr> */}
                        <tr>
                            <th className='post-item'>募集内容</th>
                            <td className='post-body'>
                                <textarea
                                    className='post-textarea'
                                    value={this.state.content}
                                    onChange={(event) => {this.handleContentChange(event)}}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className='post-item'>SNS URL</th>
                            <td className='post-body'>
                                <input
                                    className='post-text'
                                    value={this.state.sns}
                                    onChange={(event) => {this.handleSNSChange(event)}}
                                />
                            </td>
                        </tr>
                    </table>
                    <input
                        className='post-submit'
                        type='submit'
                        value='新規作成'
                        formaction='/'
                    />
                </form>
            </div>
        )
    }
}



export default Post;