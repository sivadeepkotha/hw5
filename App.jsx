import React, { useState } from 'react';
import ActivityController from './components/controller';
import ActivityView from './components/view';
import './App.css'

const activityController = new ActivityController();

const App = () => {
  const [activity, setActivity] = useState('');

  const handleFetchActivity = async () => {
    await activityController.fetchActivity();
    setActivity(activityController.getActivity());
  };

  return (
    <div>
      <ActivityView activity={activity} onFetchActivity={handleFetchActivity} />
    </div>
  );
};

export default App;