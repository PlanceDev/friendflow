import React from 'react';
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FiTwitter } from 'react-icons/fi';
import { RxDiscordLogo } from 'react-icons/rx';

export default function Footer() {
    return (
        <Container>
            <SocialLinks>
                <SocialLink href="https://twitter.com/FriendFlowTech">
                    <FiTwitter />
                </SocialLink>

                <SocialLink href="https://discord.gg/BVU6MA3UKE" target="_blank" rel="noreferrer">
                    <RxDiscordLogo />
                </SocialLink>
            </SocialLinks>
            <Copyright>&copy; {new Date().getFullYear()} Friend Flow</Copyright>
        </Container>
    );
}

const Container = styled.div`
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 200px;
    background-color: #18171e;
    color: #e3e3e3;
    justify-content: center;
    align-items: center;
`;

const SocialLinks = styled.div`
    margin-bottom: 20px;
`;

const SocialLink = styled.a`
    margin-right: 20px;
    text-decoration: none;
    color: #e3e3e3;
    font-weight: bold;
    transition: color 0.3s ease;

    svg {
        font-size: 1.8rem;
    }

    &:hover {
        color: #e3e3e3;
    }
`;

const Copyright = styled.p`
    margin: 0;
    font-size: 14px;
`;
