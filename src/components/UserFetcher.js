import React from "react";
import Header from "./Header";
import Profile from "./Profile";

export function userFetcher(){
    const [attributes, setAttributes] = useState([]);
    useEffect(() => {
        async function getUser() {
          const {attributes} = await Auth.currentAuthenticatedUser();
          setAttributes(attributes);
        };
        if (!attributes) {
            getUser();
        }
      }, []);
      return(
        <div>
            <Header name={attributes.name} />
            <Profile name={attributes.name} />
        </div>
        
      );
}