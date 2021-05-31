import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Map, Overlay  } from "pigeon-maps";
import {Start, Close} from 'assets/icons';
import {IconSVG, PopUp} from 'components/shared';
import styles from './styles.module.css';

const points = [
    { name: 'Могилев', point: [53.93056855, 30.366509989539963] },
    { name: 'Драмтеатр', point: [53.910253945071, 30.34157752990723] },
    { name: 'Днепр', point: [53.88643400004682, 30.33612728118897] },
];

const DivMarker = ({ left, top, style, children , handleOpen}) => (
  <div
    style={{
      position: 'absolute',
      left,
      top,
      ...(style || {}),
    }}
    onClick={handleOpen}
  >
    {children}
  </div>
);
DivMarker.propTypes = {
  left: PropTypes.number,
  top: PropTypes.number,
  style: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  handleOpen: PropTypes.func.isRequired,
};
DivMarker.defaultProps = {
  left: null,
  top: null,
};

const ModalQuestion = ({ handleOpen, children, open}) => (
    <div className={` ${styles.modal} ${open ? styles.modalActive : styles.modalHide}`}
    >
        <div className={styles.modalMain}>
            <IconSVG src={Close} handleClickIcon={handleOpen}/>
        {children}

        </div>
    </div>
  );
  ModalQuestion.propTypes = {
    children: PropTypes.element.isRequired,
    handleOpen: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };


const MapComponent = () => {
  const [center, setCenter] = useState();
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(15);
  const [current, setCurrent]= useState()
  const handleBoundsChange = ({ newCenter, newZoom, bounds, initial }) => {
    setCenter(newCenter);
    setZoom(newZoom);
  };
  useEffect(() => {
    points.map(advancedPoint => {
      if (advancedPoint.name === current) {
        setCenter(advancedPoint.point);
      }
    });
  }, [current]);

  useEffect(()=>{
    setCurrent(points[0].name);
  },[])

  return (
      <>
    <Map
      center={center}
      zoom={zoom}
      provider={(x, y, z) => {
        const s = String.fromCharCode(97 + ((x + y + z) % 3));
        return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
      }}
      onBoundsChanged={handleBoundsChange}
      animate
      metaWheelZoom={false}
      mouseEvents
      touchEvents
      minZoom={2}
      maxZoom={18}
    >
      {points.map((item) => (
          <DivMarker
            key={item.name}
            anchor={item.point}
            payload={item.name}
            offset={[15, 30]}
            style={{
              width: 25,
              height: 25,
              borderRadius: '50%',
              background: current === item.name ? '#FE5000' : null,

            }}
            handleOpen={()=>{setOpen(true)}}
          >
            <img src={Start} alt="location" style={{ padding: '3px' }} />
          </DivMarker>
        )
      )}
         <Overlay             offset={[15, 30]}
 anchor={center} >
        <img src={Start} width={50} height={50} alt="Pigeon!" />
      </Overlay >
    </Map>
      <ModalQuestion
        open={open}
        handleOpen={() => {
            setOpen(false);
        }}
      />
    </>
  );
};

MapComponent.propTypes = {
};

export default MapComponent;
