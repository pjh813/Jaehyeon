import React, { useCallback, useState, useRef, useEffect } from "react";
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { BiLeftArrow, BiCube, BiCommentDetail, BiImageAdd } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { PiFrameCornersBold, PiFlowArrowFill } from "react-icons/pi";
import { SketchPicker } from 'react-color';
import { Sketch } from "@uiw/react-color";

import ImageAdaptor from "../components/ImageAdaptor.js";
import ThreeImage from "../components/ThreeImage.js";
import AboutMe from "../components/AboutMe.js";
import Scroll from "../components/Scroll.js";
import Profile from "../components/Profile.js";
import ColorPicker from "../components/ColorPicker.js";

function ResultPage() {
  const location = useLocation();
  const dState = location.state;
  const dStateList = Object.keys(dState.stateList);
  let a=[1,2,3];
  useEffect(()=>{
    console.log(dStateList)
  },[])
  // 영역 관리 state
  const [state, setState] = useState({[uuidv4()]: []})
  
  // 블록 별 {id, data}
  const [dataList, setDataList] = useState(location.state.dataList);

  // 렌더링 시 return할 블록 {id, content}
  const [blockList, setBlockList] = useState([]);
  

  // 블록 렌더링 함수 (content로 식별)
  let createBlock = (content, id)=>{
    let result ;
    switch (content) {
      case '이미지1':
        return <ImageAdaptor id={id} dataList={dataList} setDataList={setDataList}/>;
    
      case '이미지2':
        return <ThreeImage id={id} dataList={dataList} setDataList={setDataList}/>;

      case '도형1':
        return <Profile id={id} dataList={dataList} setDataList={setDataList}/>;
      
      case '도형2':
        return <Scroll id={id} dataList={dataList} setDataList={setDataList}/>;
      
      case '도형3':
        return <AboutMe id={id} dataList={dataList} setDataList={setDataList}/>;

      default:
        return <div>HELL</div>;
    }
  }
  
  // 식별자 리스트
  const ITEMS = [
    {
        id: uuidv4(),
        title: "프로필",
        content: '도형1',
    },
    {
        id: uuidv4(),
        title: '액티브 슬라이드',
        content: '도형2',
    },
    {
        id: uuidv4(),
        title: 'About Me',
        content: '도형3',
    },
  ];
  const ITEMS2 = [
      {
          id: uuidv4(),
          title: '글상자1',
          content: '글상자1',
      },
      {
          id: uuidv4(),
          title: '글상자2',
          content: '글상자2',
      },
      {
          id: uuidv4(),
          title: '글상자3',
          content: '글상자3',
      },
      {
          id: uuidv4(),
          title: '글상자4',
          content: '글상자4',
      },
      {
          id: uuidv4(),
          title: '글상자5',
          content: '글상자5',
      },
  ];
  const ITEMS3 = [
      {
          id: uuidv4(),
          title: '배너 이미지',
          content: '이미지1',
      },
      {
          id: uuidv4(),
          title: '3-set 이미지',
          content: '이미지2',
      },
      {
          id: uuidv4(),
          title: '이미지3',
          content: '이미지3',
      },
      {
          id: uuidv4(),
          title: '이미지4',
          content: '이미지4',
      },
      {
          id: uuidv4(),
          title: '이미지5',
          content: '이미지5',
      },
  ];
  const ITEMS4 = [
      {
          id: uuidv4(),
          title: '그래프1',
          content: '그래프1',
      },
      {
          id: uuidv4(),
          title: '그래프2',
          content: '그래프2',
      },
      {
          id: uuidv4(),
          title: '그래프3',
          content: '그래프3',
      },
      {
          id: uuidv4(),
          title: '그래프4',
          content: '그래프4',
      },
      {
          id: uuidv4(),
          title: '그래프5',
          content: '그래프5',
      },
  ];
  const ITEMS5 = [
      {
          id: uuidv4(),
          title: '연대기1',
          content: '연대기1',
      },
      {
          id: uuidv4(),
          title: '연대기2',
          content: '연대기2',
      },
      {
          id: uuidv4(),
          title: '연대기3',
          content: '연대기3',
      },
      {
          id: uuidv4(),
          title: '연대기4',
          content: '연대기4',
      },
      {
          id: uuidv4(),
          title: '연대기5',
          content: '연대기5',
      },
  ];
  
  return (
    <>
    <div className="HLELO">
    {
      dStateList ?
        dStateList.map((item, idx)=>(
          dState.stateList[item].map((it, i)=>(
            createBlock(it.content, it.id)
          ))
        ))
      :
        <div>dfjk</div>
    }
    </div>
    </>
  );
}


export default ResultPage;