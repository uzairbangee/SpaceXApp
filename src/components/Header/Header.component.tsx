import React, {useState} from 'react';
import "./header.css";
import logo from "./../../images/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import useWebAnimations, { fadeInRight } from "@wellyshen/use-web-animations";
import {Link} from 'react-router-dom';

type cssPropType = {
    opacity: number,
    visibility: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon : {
        [theme.breakpoints.down('sm')]: {
            width: '1.2em',
            height: '1.2em',
        },
    }
  }),
);

const Header = () => {
    const { ref } = useWebAnimations<HTMLDivElement>({ ...fadeInRight });
    const classes = useStyles();
    const [menu, setMenu] = useState(false);
    const [backgroundStyle, setBgStyle] = useState<React.CSSProperties>({
        opacity: 0,
        visibility: 'hidden'
    });

    const onOpen = () => {
        setMenu(true);
        setBgStyle({
            opacity: 1,
            visibility: 'inherit'
        })
    }

    const onClose = () => {
        setMenu(false);
        setBgStyle({
            opacity: 0,
            visibility: 'hidden'
        })
    }

    return (
        <header className="header">
            <div className="header__bg"></div>
            <div className="inner_header">
            <Link to="/">
                <div className="logo__box">
                    <img src={logo} className="logo" alt=""/>
                </div>
            </Link>
                <div className="menu_button">
                    {
                        menu
                        ?
                        <ClearSharpIcon className={classes.icon} onClick={onClose}/>
                        :
                        <MenuIcon className={classes.icon} onClick={onOpen}/>
                    }
                </div>
            </div>
            <div className="menu__close" style={backgroundStyle}></div>
            {
                menu &&
                <div className="menu" ref={ref}>
                    <div className="menu__background"></div>
                    <div className="navigation__menu">
                        <ul className="nav__links">
                            <Link to="/launch" onClick={onClose}>
                                <li className="nav__item">Launch</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            }
                
        </header>
    )
}

export default Header;