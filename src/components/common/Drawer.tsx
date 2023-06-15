import React, {MouseEventHandler} from 'react';

interface Props {
  children: JSX.Element,
  title: string,
  onClose: (value: boolean | ((prevVar: boolean) => boolean)) => void,
  closed: boolean
}

function Drawer({children, title, onClose, closed}: Props): JSX.Element {
  if (closed)
    return <></>;
  return (
    <div className={'absolute top-0 left-0 h-screen w-full z-50 bg-gray-600/50'} >
      <div className={'flex justify-end'}>
        <div className={'flex-col h-screen bg-white w-1/3 p-6'}>
          <div className={'flex w-full justify-end items-center'}>
            <div className={'flex text-gray-500 space-x-4'}>
              <div className={'cursor-pointer'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"/></svg>
              </div>
              <div className={'cursor-pointer'} onClick={() => onClose(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12z"/><path fill="currentColor" d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"/></svg>
              </div>
            </div>
          </div>

          <div className={'font-semi-bold text-xl'}>
            {title}
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;