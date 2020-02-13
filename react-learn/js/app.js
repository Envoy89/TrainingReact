'use strict';

window.ee = new EventEmitter();

var my_news = [
    {
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];
    

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.readmoreClick = this.readmoreClick.bind(this);
    }

    readmoreClick(e) {
        e.preventDefault();
        this.setState({visible: true});
    }
        
    render() {
        var author = this.props.data.author;
        var text = this.props.data.text;
        var bigText = this.props.data.bigText;  
        var visible = this.state.visible;

        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>
                <a href="#" 
                    onClick={this.readmoreClick} 
                    className={'news__readmore ' + (visible ? 'none': '')}>
                    Подробнее
                </a>
                <p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
            </div>
        );
    }
}

class News extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        var data = this.props.data;

        if(data.length > 0) {
            var newsTemplate = data.map(function(item, index) {
                return (
                    <div key={index} >
                        <Article data={item} />
                    </div>
                )
            });
        } else {
            newsTemplate = <p>К сожалению новостей нет</p>
        }
        
        return (
            <div className="news">
               {newsTemplate}
               <strong className={'news__count ' + (data.length > 0 ? '': 'none')}>Всего новостей: {data.length}</strong>
            </div>
        );
    }
}

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        }

        this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
        this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.author).focus();
        var node = ReactDOM.findDOMNode(this.refs.alert_button);
        node.addEventListener("click", this.onBtnClickHandler);
    }

    componentWillUnmount() {
        var node = ReactDOM.findDOMNode(this.refs.alert_button);
        node.removeEventListener("click", this.onBtnClickHandler);
    }

    onBtnClickHandler(e) {
        e.preventDefault();
        e.stopPropagation();

        var textEl = ReactDOM.findDOMNode(this.refs.text);

        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = textEl.value;
        
        var item = [{
            author: author,
            text: text,
            bigText: '...'
        }];
        
        window.ee.emit('News.add', item);

        textEl.value = '';
        this.setState({textIsEmpty: true});
    }

    onCheckRuleClick(e) {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked});
    }

    onFieldChange(fieldName, e) {
        if (e.target.value.trim().length > 0) {
          this.setState({[''+fieldName]:false})
        } else {
          this.setState({[''+fieldName]:true})
        }
      }

    render() {
        var agreeNotChecked = this.state.agreeNotChecked;
        var authorIsEmpty = this.state.authorIsEmpty;
        var textIsEmpty = this.state.textIsEmpty;

        return(
            <form className='add cf'>
                <input
                    type='text'
                    className='add__author'
                    onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                    placeholder='Ваше имя'
                    ref='author'
                />
                <textarea
                    className='add__text'
                    onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                    placeholder='Текст новости'
                    ref='text'
                ></textarea>
                <label className='add__checkrule'>
                    <input 
                        type='checkbox' 
                        defaultChecked={false} 
                        ref='checkrule' 
                        onChange={this.onCheckRuleClick}
                    />
                    Я согласен справилами
                </label>
                <button
                    className='add__btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled={agreeNotChecked || authorIsEmpty || textIsEmpty} >
                    Добавить новость
                </button>
            </form>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: my_news
        }
    }

    componentDidMount() {
        var self = this;
        window.ee.addListener('News.add', function(item) {
            var nextNews = item.concat(self.state.news);
            self.setState({news: nextNews});
        });
    }

    componentWillUnmount() {
            window.ee.removeListener('News.add');
    }

    render() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <Add />
                <News data={this.state.news}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);