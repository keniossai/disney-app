import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <Nav>
            <Logo src='/images/logo.svg' />

            <NavMenu>
                <Link href="">
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </Link>
                <Link href="">
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </Link>
                <Link href="">
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </Link>
                <Link href="">
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINAL</span>
                </Link>
                <Link href="">
                    <img src="/images/movie-icon.svg" alt="" />
                    <span>MOVIE</span>
                </Link>
                <Link href="">
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </Link>
            </NavMenu>
            <UserImg src='https://avatars.githubusercontent.com/u/49806812?v=4' />
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    padding: 0 30px;
    align-items: center;
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;
    cursor: pointer;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        color: white;
        text-decoration: none;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: #fff;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

`
const UserImg = styled.img `
    width: 48px;
    height: 48px;
    border-radius: 50%;
`
