import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTitleFilter, sortByAlphabet, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class BlogFilters extends React.Component {
    state = {
        calenderFocused:  null
    };
    onSortChange = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'alphabetically') {
            this.props.sortByAlphabet();
        }
    };
    onTextChange = (e) => {
        this.props.setTitleFilter(e.target.value);
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="text-input"
                            type="text"
                            placeholder="search blogs"
                            value={this.props.filters.title}
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSortChange}
                        >
                            <option value="alphabetically">Alphabetically</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                            startDate = {this.props.filters.startDate}
                            endDate = {this.props.filters.endDate}
                            onDatesChange = {this.onDatesChange}
                            focusedInput = {this.state.calenderFocused}
                            onFocusChange = {this.onFocusChange}
                            numberOfMonths = {1}
                            isOutsideRange = {() => false}
                            showClearDates = {true}
                        />
                    </div>
                </div>
            </div>
        )
    };
};


const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTitleFilter: (title) => dispatch(setTitleFilter(title)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAlphabet: () => dispatch(sortByAlphabet()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogFilters);