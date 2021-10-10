import React from 'react';
import Nav from './App.js';
import LoadedComponent from './components/isLoading';


export const Context = React.createContext();

class Words extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [],
            isLoading: false,
            errors: null,
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true }); //включаем индикатор
        this.loadData()
    }
    loadData = () => {
        fetch('/api/words')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .then((response) =>
                this.setState({
                    words: response,
                    isLoading: false,  //выключаем индикатор
                })
            )
            .catch(error => this.setState({ error: error, isLoading: false }));
    }
    render() {
        const { words, isLoading, error, loadData } = this.state;

        return (
            <Context.Provider value={words}>
                <LoadedComponent isLoading={isLoading} error={error} loadData={loadData}>
                    <Nav />
                </LoadedComponent>
            </Context.Provider>
        )
    }
}
export default Words;