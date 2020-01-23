import styled from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    padding: .375rem .75rem;
    font-size: ${props => props.fontSize || '15px'};
    color:${props => props.color || `red`};
    border-radius: .25rem;
`

export const Success = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    padding: .375rem .75rem;
    font-size: ${props => props.fontSize || '15px'};
    color:${props => props.color || `red`};
    border-radius: .25rem;
`

export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.inputColor || "palevioletred"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;