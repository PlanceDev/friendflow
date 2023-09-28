import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FriendCard from '../../components/Private/FriendCard';
import TopNav from '../../components/Private/TopNav';
import BottomNav from '../../components/Private/BottomNav';
import ActionNav from '../../components/Private/ActionNav';
import axios from 'axios';

import { useUserSearchStore } from '../../store';

export default function Friends() {
    const [friends, setFriends] = useState<any[]>([]);

    const getUsers = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/friends`, {
                withCredentials: true,
            });

            setFriends(result.data.friends);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <ActionNav />
            {/* <TopNav /> */}
            <div>
                <h1 style={{ textAlign: 'center', color: '#d1b48c' }}>Friends</h1>
            </div>
            <Container>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '5px 20px',
                        fontSize: '12px',
                        fontWeight: 400,
                        color: '#d1b48c',
                    }}
                >
                    <span>Owned Keys</span>

                    <span>Total Value</span>
                </div>

                <UserCardContainer>
                    {friends.map((friend: any) => (
                        <FriendCard
                            key={friend.key._id}
                            _id={friend.key._id}
                            avatar={friend.key.avatar}
                            username={friend.key.username}
                            displayName={friend.key.displayName}
                            followers={friend.key.followers}
                            marketCap={friend.key.marketCap}
                            volume={friend.key.volume}
                            earnings={friend.key.earnings}
                            price={friend.key.price}
                            supply={friend.key.supply}
                            claimed={friend.key.claimed}
                            currentlyHolding={friend.quantity}
                        />
                    ))}
                </UserCardContainer>
            </Container>
            <BottomNav />
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 11vh;
`;

const UserCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;