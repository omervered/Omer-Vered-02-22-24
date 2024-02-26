import { useEffect, useRef, useState } from "react";
import { eventBusService } from "../../services/event-bus.service";

import * as Styles from "./user-message-styles";

export function UserMsg() {
  const [msg, setMsg] = useState(null);
  const timeoutIdRef = useRef();

  useEffect(() => {
    const unsubscribe = eventBusService.on("show-msg", (msg) => {
      setMsg(msg);

      if (timeoutIdRef.current) {
        timeoutIdRef.current = null;
        clearTimeout(timeoutIdRef.current);
      }
      timeoutIdRef.current = setTimeout(closeMsg, 3000);
    });
    return unsubscribe;
  }, []);

  function closeMsg() {
    setMsg(null);
  }

  if (!msg) return <span></span>;
  return (
    <Styles.UserMsgContainer>
      <Styles.UserMsgType>{msg.txt}</Styles.UserMsgType>
    </Styles.UserMsgContainer>
  );
}
