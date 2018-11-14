import React, { PureComponent } from 'react';
import TerminalCommand from './command';

class GetFingerprint extends PureComponent {
  constructor(props) {
    super(props);
    this.name = "Get Fingerprint";
    this.description = "Openpilot identifies your car by using a list of its CAN messages.  This is called a fingerprint.  Executing this command while the car is on retreives the fingerprint of your car.";
    this.commands = [
      "cd /data/openpilot/selfdrive",
      "PYTHONPATH=/data/openpilot PREPAREONLY=1 /data/openpilot/selfdrive/debug/get_fingerprint.py"
    ];
  }

  render() { return(
    <TerminalCommand 
      name={this.name} 
      description={this.description} 
      commands={this.commands}
      {...this.props} />);
  }
}

export default GetFingerprint;
