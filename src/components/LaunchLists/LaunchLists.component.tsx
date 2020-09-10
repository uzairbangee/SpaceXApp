import React, {useState, Fragment} from 'react';
import "./launch.css";
import {Link} from 'react-router-dom';
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import ReactPlayer from 'react-player';

type propType = {
    smallHeading: string,
    largeHeading: string,
    image: string,
    btnTitle: string,
    align: string,
    link: string,
    path: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#000',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: '90%',
      height: '90%',
      outline: 0
    },
    icon: {
        marginLeft: 'auto',
        display: 'block',
        cursor: 'pointer'
    }
  }),
);

const LaunchLists:React.FC<any> = ({smallHeading, largeHeading, image, btnTitle, align, link, path}) => {

    const { ref } = useWebAnimations<HTMLDivElement>({ ...fadeIn });

    const [modal, setModal] = useState(false);
    const classes = useStyles();

    const modalOpen = () => {
        setModal(true);
    }

    const modalClose = () => {
        setModal(false);
    }

    return (
        <Fragment>
            <div className="section__feature">
                <div className="background__image_launch" style={{backgroundImage: `url(${image})` }}>
                </div>
                <div className="heading__section" ref={ref}>
                    <div className={`inner_area_heading_${align}`}>
                        <h3>{smallHeading}</h3>
                            <h2>{largeHeading}</h2>
                            {
                                link
                                ?
                                    <Link to={path}>
                                        <button className="btn">
                                            {btnTitle}
                                        </button>
                                    </Link>
                                :
                                <button className="btn" onClick={modalOpen}>
                                            {btnTitle}
                                        </button>
                            }
                    </div>
                </div>
            </div>
            {
                modal &&
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={modal}
                    onClose={modalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={modal}>
                    <div className={classes.paper}>
                        <ClearSharpIcon className={classes.icon} onClick={modalClose}/>
                        <ReactPlayer url={path} width={'100%'} height={'100%'}/>
                    </div>
                    </Fade>
                </Modal>
            }
        </Fragment>
    );
}

export default LaunchLists;