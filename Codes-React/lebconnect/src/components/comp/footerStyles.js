// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 5% 2.5%;

	background: #040727;
	// position: fixed;
	bottom: 0;
	width: 100%;
	margin-top:auto;

	@media (max-width: 1000px) {
		// padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin:auto auto;

	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 18px;
	text-decoration: none;
	transition: .5s;

	&:hover {
		color: #3090C7;
		transition: 200ms ease-in;
		padding-left: 6px;
	}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px
	font-weight: bold;
`;
export const Copyright = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #fff;
`;
