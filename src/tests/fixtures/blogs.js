import moment from 'moment';

export default [{
    id: '1',
    title: 'live your life',
    content: 'content of live your life',
    createdAt: moment(0).add(5, 'days').valueOf()
},{
    id: '2',
    title: 'ethical hacking',
    content: 'fraand ill show u some ethical hacking',
    createdAt: moment(0).subtract(5, 'days').valueOf()
},{
    id: '3',
    title: 'C# MasterClass',
    content: 'Learn everything from scratch in C#',
    createdAt: 0
}];