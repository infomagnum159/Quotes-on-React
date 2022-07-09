import React, {useState} from 'react';
import QuoteForm from "../../components/QuoteForm/QuoteForm";
import Header from "../../components/Header/Header";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/UI/Spinner/Spinner";
import './SubmitNewQuote.css';

const SubmitNewQuote = props => {
    const [quote, setQuote] = useState({
        author: '',
        text: '',
        category: ''
    });

    const [spinner, setSpinner] = useState(false);

    const addHandler = async event => {
        event.preventDefault();
        setSpinner(true);
        const newQuote = {
            ...quote,
        };
        try {
            await axiosApi.post('/quotes.json', newQuote);
        } finally {
            setSpinner(false);
            props.history.push('/');
        }
    };

    const quoteDataChanged = e => {
        const name = e.target.name;
        const value = e.target.value;

        setQuote(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    let form = (
        <QuoteForm
            sendHandler={addHandler}
            author={quote.author}
            text={quote.text}
            category={quote.category}
            quoteDataChanged={quoteDataChanged}
            button={'SEND'}
        />
    );

    if (spinner) {
        form = <Spinner/>
    }

    return (
        <>
            <Header/>
            <div className="add">
                {form}
            </div>
        </>
    );
};

export default SubmitNewQuote;