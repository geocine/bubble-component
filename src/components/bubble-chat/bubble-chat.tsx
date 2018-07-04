import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bubble-chat',
  styleUrl: 'bubble-chat.scss',
  shadow: false
})
export class BubbleChat {

  @Prop() userList: Array<any> = [];
  @Prop() messageList: Array<any> = [];
  @Prop() user: string;

  render() {
    let users = [];
    for (let i = 0; i < this.userList.length; i++) {
      users.push(
        <bubble-user user={this.userList[i].name} id={this.userList[i].id} online={true}></bubble-user>
      );
    }

    let messages = [];
    for(let i = 0; i < this.messageList.length; i++) {
      // set time property
      messages.push(
        <bubble-message user={this.user} message={this.messageList[i].message}></bubble-message>
      );
    }

    return (
      <div class="font-sans antialiased h-screen flex">
        <div class="bg-indigo-darker text-purple-lighter flex-none w-64 pb-6 hidden md:block">
          <div class="text-white mb-2 mt-3 px-4 flex justify-between">
            <div class="flex-auto">
              <h1 class="font-semibold text-xl leading-tight mb-1 truncate">Bubble</h1>
              { this.user ? <div class="flex items-center mb-6">
                <svg class="h-2 w-2 fill-current text-green mr-2" viewBox="0 0 20 20"><circle cx={10} cy={10} r={10} /></svg>
                <span class="text-white opacity-50 text-sm">{this.user}</span>
              </div> : ''}
            </div>
            <div>
              <svg class="h-6 w-6 fill-current text-white opacity-25" viewBox="0 0 20 20">
                <path d="M14 8a4 4 0 1 0-8 0v7h8V8zM8.027 2.332A6.003 6.003 0 0 0 4 8v6l-3 2v1h18v-1l-3-2V8a6.003 6.003 0 0 0-4.027-5.668 2 2 0 1 0-3.945 0zM12 18a2 2 0 1 1-4 0h4z" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="mb-8">
            <div class="px-4 mb-2 text-white flex justify-between items-center">
            { this.userList.length > 0 ? <div class="opacity-75">Online</div> : ''}
              <div class="hidden">
                <svg class="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                </svg>
              </div>
            </div>
            {users}
          </div>
          <div class="hidden">
            <div class="px-4 mb-2 text-white flex justify-between items-center">
              <div class="opacity-75">Apps</div>
              <div>
                <svg class="fill-current h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Chat content */}
        <div class="flex-1 flex flex-col bg-white overflow-hidden">
          {/* Top bar */}
          <div class="border-b flex px-6 py-2 items-center flex-none">
            <div class="flex flex-col">
              <h3 class="text-grey-darkest mb-1 font-extrabold">Welcome</h3>
              <div class="text-grey-dark text-sm truncate">
                Chat and be merry.
              </div>
            </div>
            {/* md:block */}
            <div class="ml-auto hidden">
              <div class="relative">
                <input type="search" placeholder="Search" class="appearance-none border border-grey rounded-lg pl-8 pr-4 py-2" />
                <div class="absolute pin-y pin-l pl-3 flex items-center justify-center">
                  <svg class="fill-current text-grey h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Chat messages */}
          <div class="px-6 py-4 flex-1 overflow-y-scroll">
            {messages}
          </div>
          <div class="pb-6 px-4 flex-none">
            <bubble-input></bubble-input>
          </div>
        </div>
      </div>

    );
  }
}
