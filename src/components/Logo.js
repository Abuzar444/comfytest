import styled from 'styled-components';

const Logo = () => {
    return (
        <Wrapper>
            <span>End of the</span>Beginning
        </Wrapper>
    )
}

const Wrapper = styled.h3`
    margin-bottom: 0;
    color: var(--clr-primary-11);
    span{
        color: var(--clr-primary-5);
    }
`;

export default Logo;
