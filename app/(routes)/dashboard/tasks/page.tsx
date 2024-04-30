"use client";
import {
  EllipsisVerticalIcon,
  FunnelIcon,
  PlusIcon,
  SearchIcon,
  TagIcon,
  TasksIcon,
  ToggleIcon,
} from "@/app/icons";
import { Card } from "@/components/card";
import React, { useState } from "react";
import { ProjectModal } from "@/hooks/modal";
import { MdLabel } from "react-icons/md";
import Modal from "@/components/modal";
import Image from "next/image";
import Form from "../../(components)/form";
import { TaskWrapper } from "../../(components)/task-wrapper";
interface Task {
  title: string;
  subTitle: string;
  tags: string[];
  duration: string;
}

const Tasks = () => {
  const taskModal = ProjectModal();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<number | null>(null);

  const addTask = () => {
    setTasks([...tasks, {
      title: '', // Initially empty title state
      subTitle: '', // Initially empty subtitle state
      tags: [], // Initially empty tags array
      duration: '', // Initially empty duration state
    }]);
  };

  const handlePopupOpen = (index: number) => {
    setSelectedTaskIndex(index);
  };

  const handlePopupClose = () => {
    setSelectedTaskIndex(null);
  };

  // Handle save, edit, and delete actions based on your implementation
  const handleSave = () => {
    // Update task based on selectedTaskIndex
    console.log('Task saved!');
    setSelectedTaskIndex(null);
  };

  const handleEdit = () => {
    // Navigate to edit task view or implement edit functionality here
    console.log('Task edit initiated!');
    setSelectedTaskIndex(null);
  };

  const handleDelete = () => {
    // Remove task from tasks array based on selectedTaskIndex
    const newTasks = tasks.filter((_, i) => i !== selectedTaskIndex);
    setTasks(newTasks);
    setSelectedTaskIndex(null);
  };

  function handleModalOpen() {
    taskModal.onOpen();
  }
  return (
    <div className="px-8 py-1">
      <header className="space-y-5 pb-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="font-bold text-2xl flex items-center gap-2">
            <TasksIcon className="h-8 w-8" /> Tasks
          </h1>
          <div className="flex items-center gap-4">
            <div className="rounded-md bg-slate-50 border-slate-50 focus:border-slate-50 flex items-center px-2">
              <SearchIcon className=" text-slate-400" />
              <input
                type="text"
                className="rounded-md bg-slate-50 input-to-style border-slate-50 focus:border-slate-50  focus:outline-slate-50"
                placeholder="Search"
              />
            </div>
            <button
              onClick={addTask}
              className="flex items-center gap-1 bg-[#058179] py-2 px-3 rounded-md text-white"
            >
              <PlusIcon />
              Create a task
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="flex gap-4 items-center text-slate-800 font-medium">
            <FunnelIcon /> Activity <ToggleIcon className="rotate-90" />
          </h3>
          <div className="flex items-center gap-8">
            <button className="flex gap-2 items-center">
              Sort by <ToggleIcon className="rotate-90" />
            </button>
            <button className="flex gap-2 items-center">
              {" "}
              Group by: Status <ToggleIcon className="rotate-90" />
            </button>
          </div>
        </div>
      </header>

      <section className="flex flex-wrap gap-4 justify-center">
        {tasks.map((task, index) => (
          <Card key={index} className="shadow-md border px-4 space-y-8 flex flex-col border-gray-200 rounded-md py-2 h-96 min-w-96">
            <header className="flex justify-between px-2 relative">
              <div>
                <input placeholder="title" className="border-none" />
                <h1>{task.title}</h1> {/* Update title with state value */}
                <small className="underline underline-offset-2">
                  <input placeholder="subtitle" className="border-none pt-2" />
                  {task.subTitle} {/* Update subtitle with state value */}
                </small>
              </div>
              <span onClick={() => handlePopupOpen(index)}>
              <EllipsisVerticalIcon
                className="rotate-90 cursor-pointer"
              />
              </span>

              {selectedTaskIndex === index && (
                <Popup onClose={handlePopupClose} isOpen={handlePopupOpen}>
                  <p>hello</p>
                </Popup>
              )}
            </header>
            {/* Main content remains the same */}
          </Card>
        ))}
      </section>
      <TaskWrapper />
    </div>
  );
};

export default Tasks;


interface PopupProps {
  children: React.ReactNode;
  onClose: () => void;
  position?: "left center" | "right center";
  isOpen: any;
}

const Popup = ({ children, isOpen, onClose }: PopupProps) => {
  return (
    isOpen && (
      <div className="absolute top-0 right-0 z-50 bg-gray-200 bg-opacity-50 p-2">
        <div className="bg-white rounded-md shadow-md p-2">
          {children}
          <button className="absolute top-0 right-0 p-1" onClick={onClose}>
            <svg
              className="h-4 w-4 text-gray-500 hover:text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.707 3.307a1 1 0 00-1.414 0L0 6.014l4.707 4.707a1 1 0 001.414-1.414L2.307 6.914l2.393-2.393zM10.007 8.693a1 1 0 000 1.414l2.393 2.393-4.707 4.707a1 1 0 001.414 1.414L14.014 12l-2.393-2.393a1 1 0 00-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};
{
  /* <section>
<div className="grid grid-flow-col max-w-3xl gap-2">
{tasks ? (
  tasks.map((task) => (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl p-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <h1>
            <span className="text-gray-700 font-bold text-lg">Task: </span> {task.title}
          </h1>
        </div>
        <div className="p-8">

        </div>
      </div>
    </div>
  ))
) : (
  <p className="flex h-screen justify-center items-center">No Tasks available</p>
)}
</div>
</section> */
}
