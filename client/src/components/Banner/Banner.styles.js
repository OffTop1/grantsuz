import styled, {keyframes} from 'styled-components';



export const Root = styled.div`{
	width: 100%;
	height: 80vh;
	.slider
	{
		position: relative;
		width: 100%;
		height:100%;
		overflow: hidden;
		
		.previousButton, .nextButton 
		{
			svg
			{
				polygon {
					fill: #ffd800;
				}
			}
		}
		
	}

}`

export const MyBanner = styled.div `
	{
	    width: 100vw;
	    height: 80vh;
	    background: url(${props => props.img});
	   	background-attachment: inherit;
	    background-repeat: no-repeat;
	    background-position: ${props => props.align };
	    background-size: cover;
	}
	.muted-banner
	{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.3);
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0em 5em;
		color: #fff;
		.content {
			
			margin-left: 2em;
			h1 {
				transition: all 0.3s ease;
				color: yellow;	
				font-size: 27px;
				font-family:  "Comic Sans MS", cursive, sans-serif
				font-weight: 200;
			};
			p{
				transition: all 0.3s ease;
			}
		}
	}
	
`;

export const Buttons = styled.div`{
	display: flex;
}`

export const MyButton = styled.button`{
	transition: all 0.3s ease;
	outline: none;
	border: none;
	padding: 1em 2em;
	margin: 1em;
	border: 1px solid yellow ;
	font-weight: 600;
	transition: linear 0.1s;
	border-radius: 22px;
	color: ${props => props.yellow ? "#2196f3" : "yellow"};
	background-color: ${props => props.yellow ? "yellow" : "transparent"};
	&:hover{
		color: ${props => props.yellow ? "yellow" : " #2196f3"};
		background-color: ${props => props.yellow ? "transparent" : " yellow"};
	}
}`



