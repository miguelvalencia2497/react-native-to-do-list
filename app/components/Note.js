import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export class Note extends Component {
	render() {
		return(
			<View key={this.props.keyval} style={styles.note}>
				<Text style={styles.noteText}>{this.props.val.date}</Text>
				<Text style={styles.noteText}>{this.props.val.note}</Text>
				<TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
					<Text style={styles.noteDeleteText}>X</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	note: {
		position: 'relative',
		padding: 20,
		paddingRight: 100,
		borderBottomWidth: 2,
		borderBottomColor: '#ededed' 
	},
	noteText: {
		paddingLeft: 20,
		borderLeftWidth: 10,
		borderLeftColor: '#27ae60'
	},
	noteDelete: {
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#c0392b',
		padding: 10,
		top: 10,
		bottom: 10,
		right: 10
	},
	noteDeleteText: {
		color: '#fff',
	}
});