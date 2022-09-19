## Native Event Listener

![marketplace](/assets/MarketPlaceIcon.png)

Listen for native events on your page. This is similar to the Custom Event Listener (for web) on the Mendix MarketPlace

## Features

- The widget will listen for native events in your page
- When this event is detected, it can execute an action (Nanoflow, microflow, etc...)
- If you provide an attribute, it will put the value coming from `Event.detail` in this attribute before executing the action

## Example

![](/assets/Page.png)
![](/assets/Widget.png)
![](/assets/SingleAction.png)

- I have configured the widget to listen for a Native Event with name 'PressedButton'
- When this event is detected, it will execute the Nanoflow `OnAction`

Somewhere else in the page (in this case the button), I execute a Nanoflow that will execute a Javascript Action with the following code:

![](/assets/JavascriptAction.png)

## Demo project

- Coming soon

## Issues, suggestions and feature requests

Feedback can be provided on [Github](https://github.com/j3lte/mendix-native-event-listener) or through the feedback button on the demo project page

## License

The MIT License (MIT)

Copyright © CaffCode 2022. All Rights Reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
