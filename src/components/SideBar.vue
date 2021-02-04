<template>
  <v-col cols="12" md="2">
    <v-dialog v-model="groupEditDialog" width="500">
      <v-card>
        <v-container class="pa-8">
          <v-row>
            <v-col>
              <v-card-title class="headline lighten-2 pa-0">
                Sửa nhóm hàng
              </v-card-title> </v-col
            ><v-spacer />
            <v-btn icon @click="groupEditDialog = false"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-row>
          <v-row>
            <v-col>
              <v-form>
                <v-text-field
                  label="Tên nhóm"
                  v-model="editGroupName"
                  outlined
                ></v-text-field>
                <v-select
                  :items="extendedGroup"
                  item-text="name"
                  item-value="id"
                  label="Nhóm cha"
                  placeholder="---Lựa chọn---"
                  v-model="editGroupParent"
                  outlined
                >
                </v-select>
              </v-form>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green" text @click="updateGroup">
              <v-icon>mdi-content-save</v-icon>
              Lưu
            </v-btn>
            <v-btn color="grey" text @click="groupEditDialog = false">
              <v-icon>mdi-cancel</v-icon>
              Bỏ qua
            </v-btn>
            <v-btn color="warning" text @click="deleteGroup">
              <v-icon>mdi-trash-can</v-icon>
              Xóa
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
    <v-expansion-panels v-model="expansionPanels" multiple>
      <v-expansion-panel>
        <v-expansion-panel-header> Tìm kiếm </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field label="Theo mã, tên hàng"></v-text-field>
          <v-text-field label="Theo Serial/IMEI"></v-text-field>
          <v-text-field label="Theo ghi chú, mô tả đặt hàng"></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Loại hàng </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card class="mx-auto" max-width="300" tile>
            <v-list flat>
              <v-list-item-group color="primary">
                <v-list-item v-for="(item, i) in groups" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Tồn kho </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field label="Theo mã, tên hàng"></v-text-field>
          <v-text-field label="Theo Serial/IMEI"></v-text-field>
          <v-text-field label="Theo ghi chú, mô tả đặt hàng"></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Lọc theo tích điểm
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field label="Theo mã, tên hàng"></v-text-field>
          <v-text-field label="Theo Serial/IMEI"></v-text-field>
          <v-text-field label="Theo ghi chú, mô tả đặt hàng"></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Thuộc tính </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field label="Theo mã, tên hàng"></v-text-field>
          <v-text-field label="Theo Serial/IMEI"></v-text-field>
          <v-text-field label="Theo ghi chú, mô tả đặt hàng"></v-text-field>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Nhóm hàng
          <v-spacer></v-spacer>

          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                max-width="35"
                icon
                v-bind="attrs"
                v-on="on"
                @click="extendGroups"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-container class="pa-8">
                <v-row>
                  <v-col>
                    <v-card-title class="headline lighten-2 pa-0">
                      Thêm nhóm hàng
                    </v-card-title>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="dialog = false"
                    ><v-icon>mdi-close</v-icon></v-btn
                  >
                </v-row>
                <v-row>
                  <v-col>
                    <v-form>
                      <v-text-field
                        label="Tên nhóm"
                        v-model="newGroupName"
                        outlined
                      ></v-text-field>
                      <v-select
                        :items="extendedGroup"
                        item-text="name"
                        item-value="id"
                        label="Nhóm cha"
                        placeholder="---Lựa chọn---"
                        v-model="newGroupParent"
                        outlined
                      >
                      </v-select>
                    </v-form>
                  </v-col>
                </v-row>
                <v-card-actions class="pa-0">
                  <v-spacer></v-spacer>
                  <v-btn color="green" text @click="addGroup">
                    <v-icon>mdi-content-save</v-icon>
                    Lưu
                  </v-btn>
                  <v-btn color="grey" text @click="dialog = false">
                    <v-icon>mdi-cancel</v-icon>
                    Bỏ qua
                  </v-btn>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-dialog>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-text-field
            v-model="groupSearch"
            prepend-inner-icon="mdi-magnify"
            @input="searchGroup"
            hide-details="auto"
            class="pb-1 pt-0"
          ></v-text-field>
          <v-card class="mx-auto" flat>
            <v-list class="pt-1">
              <v-list-item-group>
                <v-list-item
                  v-for="(item, i) in groupHolder"
                  :key="i"
                  @mouseover="displayEditButton(item)"
                  @mouseleave="hideEditButton"
                  class="pa-0"
                  dense
                >
                  <v-list-item-content class="pa-0">
                    <v-container fluid class="pa-0">
                      <v-row align="center" no-gutters>
                        <v-col md="9" lg="10" xl="6">
                          <div style="height:30px" class="d-flex">
                            <v-list-item-title
                              v-text="item.name"
                              class="text-md-body-1"
                            ></v-list-item-title>
                          </div> </v-col
                        ><v-col md="3" lg="2" xl="6">
                          <v-btn
                            v-if="item === showEditButton"
                            icon
                            right
                            max-width="30"
                            max-height="30"
                            @click="openEditDialog(item)"
                            v-model="showEditButton"
                            ><v-icon>mdi-pencil</v-icon></v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header> Lựa chọn hiển thị </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="radioGroup">
            <v-radio label="Hàng đang kinh doanh"></v-radio>
            <v-radio label="Hàng ngừng kinh doanh"></v-radio>
            <v-radio label="Tất cả"></v-radio>
          </v-radio-group>
          <v-select
            :items="items"
            filled
            label="Số bản ghi"
            v-model="defaultValue"
          ></v-select>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script>
export default {
  name: "SideBar",
  created() {
    fetch("http://localhost:8000/graphql/?query={goodGroups{id,name,parent}}")
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.groups = result.data.goodGroups;
        this.groupHolder = [...this.groups];
      })
      .catch(error => console.log("error", error));
  },
  data() {
    return {
      expansionPanels: [5, 6],
      radioGroup: 1,
      defaultValue: 15,
      items: [5, 10, 15, 20],
      dialog: false,
      groupEditDialog: false,
      groups: [],
      groupHolder: [],
      extendedGroup: [],
      newGroupName: "",
      editGroupName: "",
      newGroupParent: null,
      editGroupParent: 0,
      groupSearch: "",
      groupIdToEdit: 0,
      showEditButton: false
    };
  },
  methods: {
    hideEditButton() {
      this.showEditButton = false;
    },
    displayEditButton(item) {
      this.showEditButton = item;
    },
    updateGroup() {
      console.log(this.groupIdToEdit);
      const url =
        "http://localhost:8000/api/good-groups/" +
        this.groupIdToEdit.toString() +
        "/";

      const formData = new FormData();

      for (const g of this.groups) {
        if (g.id === this.groupIdToEdit) {
          g.name = this.editGroupName;
          if (this.editGroupParent > 0) {
            g.parent = this.editGroupParent;
          }
        }
      }
      this.groupHolder = [...this.groups];
      formData.append("name", this.editGroupName);

      if (this.editGroupParent > 0)
        formData.append("parent", this.editGroupParent);
      fetch(url, {
        method: "PUT",
        body: formData
      })
        .then(r => r.json())
        // eslint-disable-next-line prettier/prettier
        .then(r => {
          console.log("Success:", r);
        })
        // eslint-disable-next-line prettier/prettier
        .catch(e => {
          console.error("Error:", e);
        });
      this.groupEditDialog = false;
    },
    deleteGroup() {
      const url =
        "http://localhost:8000/api/good-groups/" +
        this.groupIdToEdit.toString() +
        "/";
      fetch(url, {
        method: "DELETE"
      });
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].id === this.groupIdToEdit) {
          this.groups.splice(i, 1);
        }
      }
      this.groupHolder = [...this.groups];
      this.groupEditDialog = false;
    },
    openEditDialog(group) {
      console.log(group.parent);
      this.editGroupName = group.name;
      this.extendGroups();
      this.groupEditDialog = true;
      if (group.parent) this.editGroupParent = group.parent;
      else this.editGroupParent = 0;
      this.groupIdToEdit = group.id;
    },
    searchGroup() {
      const re = new RegExp(
        this.groupSearch.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
        "i"
      );
      this.groupHolder = [];
      for (const g of this.groups) {
        if (re.test(g.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
          this.groupHolder.push(g);
      }
    },
    extendGroups() {
      this.extendedGroup = [...this.groups];
      this.extendedGroup.unshift({ id: 0, name: "Không có cha" });
    },
    addGroup() {
      console.log(this.newGroupName);
      const formData = new FormData();

      formData.append("name", this.newGroupName);
      console.log(formData.get("name"));
      if (this.newGroupParent && this.newGroupParent > 0)
        formData.append("parent", this.newGroupParent);
      fetch("http://localhost:8000/api/good-groups/", {
        method: "POST",
        body: formData
      })
        .then(r => r.json())
        // eslint-disable-next-line prettier/prettier
        .then(r => {
          console.log("Success:", r);
        })
        // eslint-disable-next-line prettier/prettier
        .catch(e => {
          console.error("Error:", e);
        });
      fetch("http://localhost:8000/api/good-groups/")
        // eslint-disable-next-line prettier/prettier
        .then(r => r.json())
        // eslint-disable-next-line prettier/prettier
        .then(d => {
          console.log(d);
          this.groups = d;
        });
      this.dialog = false;
    }
  }
};
</script>
