import model from './model'; 

class ActivityController {
  constructor() {
    this.activityModel = new model();
  }

  async fetchActivity() {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity');
      const data = await response.json();
      const activity = data.activity;
      this.activityModel.setActivity(activity);
    } catch (error) {
      console.error('Error fetching activity:', error);
    }
  }

  getActivity() {
    return this.activityModel.getActivity();
  }
}

export default ActivityController;