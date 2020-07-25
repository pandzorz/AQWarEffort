import React, { Component, Fragment } from 'react';
import Item from './Item';

export default class Horde extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Item
          pic={'inv_ingot_02.jpg'}
          id={2840}
          total={this.props.table.total.copperBar}
          current={this.props.table.current.copperBar}
        />
        <Item
          pic={'inv_misc_leatherscrap_08.jpg'}
          id={4304}
          total={this.props.table.total.thickLeather}
          current={this.props.table.current.thickLeather}
        />
        <Item
          pic={'inv_misc_bandage_11.jpg'}
          id={14529}
          total={this.props.table.total.runeclothBandage}
          current={this.props.table.current.runeclothBandage}
        />
        <Item
          pic={'inv_misc_herb_17.jpg'}
          id={8831}
          total={this.props.table.total.purpleLotus}
          current={this.props.table.current.purpleLotus}
        />
        <Item
          pic={'inv_misc_fish_01.jpg'}
          id={6887}
          total={this.props.table.total.spottedYellowtail}
          current={this.props.table.current.spottedYellowtail}
        />
        <hr />
        <Item
          pic={'inv_misc_bandage_14.jpg'}
          id={3530}
          total={this.props.table.total.woolBandage}
          current={this.props.table.current.woolBandage}
        />
        <Item
          pic={'inv_misc_bandage_19.jpg'}
          id={8544}
          total={this.props.table.total.mageBandage}
          current={this.props.table.current.mageBandage}
        />
        <Item
          pic={'inv_misc_food_47.jpg'}
          id={12209}
          total={this.props.table.total.leanWolf}
          current={this.props.table.current.leanWolf}
        />
        <Item
          pic={'inv_misc_fish_20.jpg'}
          id={13935}
          total={this.props.table.total.bakedSalmon}
          current={this.props.table.current.bakedSalmon}
        />
        <Item
          pic={'inv_misc_flower_02.jpg'}
          id={2447}
          total={this.props.table.total.peacebloom}
          current={this.props.table.current.peacebloom}
        />
        <Item
          pic={'inv_misc_herb_19.jpg'}
          id={4625}
          total={this.props.table.total.firebloom}
          current={this.props.table.current.firebloom}
        />
        <Item
          pic={'inv_ingot_05.jpg'}
          id={3576}
          total={this.props.table.total.tinBar}
          current={this.props.table.current.tinBar}
        />
        <Item
          pic={'inv_ingot_06.jpg'}
          id={3860}
          total={this.props.table.total.mithrilBar}
          current={this.props.table.current.mithrilBar}
        />
        <Item
          pic={'inv_misc_leatherscrap_07.jpg'}
          id={4234}
          total={this.props.table.total.heavyLeather}
          current={this.props.table.current.heavyLeather}
        />
        <Item
          pic={'inv_misc_leatherscrap_02.jpg'}
          id={8170}
          total={this.props.table.total.ruggedLeather}
          current={this.props.table.current.ruggedLeather}
        />
      </Fragment>
    );
  }
}
