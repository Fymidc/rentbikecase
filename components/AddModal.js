import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DropdownPicker from './DropdownPicker';


const AddModal = (props) => {
  const [text, settext] = React.useState("")
  const [localopen, setlocalOpen] = useState(false);
  const [modelopen, setmodelOpen] = useState(false);
  const [coloropen, setcolorOpen] = useState(false);
  const [rateopen, setrateOpen] = useState(false);

  //const [value, setValue] = useState(null);

  //console.log("modaldan gelen",value)

  const [localitems, setlocalItems] = useState([
    { label: 'All', value: null },
    { label: 'beşiktaş', value: 'beşiktaş' },
    { label: 'taksim', value: 'taksim' },
    { label: 'beykoz', value: 'beykoz' }
  ]);
  const [coloritems, setcolorItems] = useState([
    { label: 'red', value: 'red' },
    { label: 'yellow', value: 'yellow' },
    { label: 'green', value: 'green' },
    { label: 'grey', value: 'grey' }
  ]);
  const [modelitems, setmodelItems] = useState([
    { label: 'salcano', value: 'salcano' },
    { label: 'bianchi', value: 'bianchi' },
    { label: 'kron', value: 'kron' },
    { label: 'mosso', value: 'mosso' }
  ]);
  const [rateitems, setrateItems] = useState([
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
  ]);
  const onclosemodal = () => {
    props.setlocation(null)
    props.setmodel(null)
    props.setcolor(null)
    props.setrating(null)
    props.setVisible(!props.setVisible)
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.visible}

    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>


          <View style={{ flex: 1, alignItems: "center", justifyContent: "space-between" }} >
            <Text style={styles.modalText}>Filter</Text>
            <View style={{ flex: 1 }} >

              <View style={styles.downpicker} >

                <DropdownPicker
                  placeholder={"Select Model"}
                  open={modelopen}
                  value={props.model}
                  items={modelitems}
                  setOpen={setmodelOpen}
                  setValue={props.setmodel}
                  setItems={setmodelItems}
                />
              </View>

              

              <View style={styles.downpicker} >

                <DropdownPicker
                  placeholder={"Select Color"}
                  open={coloropen}
                  value={props.color}
                  items={coloritems}
                  setOpen={setcolorOpen}
                  setValue={props.setcolor}
                  setItems={setcolorItems}
                />
              </View>

              <View style={styles.downpicker} >

                <DropdownPicker
                  placeholder={"Select Rate"}
                  open={rateopen}
                  value={props.rating}
                  items={rateitems}
                  setOpen={setrateOpen}
                  setValue={props.setrating}
                  setItems={setrateItems}
                />
              </View>
            </View>

          </View>




          <View style={{ flexDirection: "row", alignItems: "center" }} >
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onclosemodal()}
            >
              <Text style={styles.textStyle}>CANCEL</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setVisible(!props.setVisible)}
            >
              <Text style={styles.textStyle}>FILTER</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default AddModal

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "rgba(153, 153, 153, 0.2)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    zIndex: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#222222",
    borderRadius: 20,
    padding: 35,

    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "85%",
    height: 170,
    flex: 1
  },
  button: {
    borderRadius: 20,
    padding: 10,
    bottom: 15,
    elevation: 2,
    width: 80,
    marginHorizontal: 10
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "white",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: 2,
    fontSize: 19,
    color: "white"
  }, downpicker: {
    flex: 1,
    alignItems: "center"
  }
})