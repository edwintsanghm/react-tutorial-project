import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';

import StockBox from './components/stock/StockBox';


// ReactDOM.render(
// 	<CommentBox url="/api/comments"  pollInterval={2000}/>
// 	, document.getElementById('content')
// );

ReactDOM.render(
	<StockBox url="/api/stocks"  pollInterval={2000}/>
	, document.getElementById('content')
);