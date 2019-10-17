# Git
## 创建仓库repository
简单创建一个目录，文件被Git管理
### 创建一个目录

```bash
cd d:
mkdir learngit
cd learngit
pwd
```
创建仓库，创建一个文件夹，然后进入，pwd用于显示当前目录


```bash
git init
Initialized empty Git repository in...
```
相当于一种初始化操作，创建了一个空仓库，有一个`.git`目录，但是这个目录是隐藏的可能看不到，`ls -ah`命令查看

### 把文件添加到仓库
notepad写最好
编写一个readme.txt文件放在learngit目录下，子目录也可

```bash
git add readme.txt
```
把文件添加到仓库

```bash
git commit -m “wrote a readme file”
```
把文件提交到仓库
`-m`后面输入到是本次提交到说明，便于从历史记录中找到感动记录
也可一次add多个文件

```bash
git init
git add <file>
git commit -m <massage>
```

## 时光机穿梭
修改了readme文件保存后

```bash
git status
```
查看结果，可以时刻掌握仓库的当前状态，输出readme被修改了，但是还没有准备提交的修改

```bash
git diff readme.txt
```
查看具体的修改内容
然后`git add`添加
`git status`查看状态
可以看到要被修改的内容包括了readme
然后`git commit`提交，`git status`查看


`git status`随时查看工作区状态
`git diff`查看修改的内容

## 版本回退
commit了不同的版本到仓库
查看历史记录

```bash
git log
```
显示从最近到最远的提交日志

```bash
git log —pretty=oneline
```
简化了信息，输出的是commit id（版本号）

### 退回
首先知道当前版本  `HEAD`表示当前版本，也就是最新的提交，上一个是HEAD^，上上个是HEAD^^，上一百个HEAD～100


```bash
git reset —hard HEAD^
```
执行完`git reset`的命令，可以发现已经回退了版本，本地文件已经被修改了
重新git log查看一下，发现最开始的版本不见了，找到版本号id，reset又可以找回来了
通过HEAD指针，指向不同的版本

如果关闭了git bash
`git reflog`查看每一次命令，就可以看到commit id了

`HEAD`指向的版本就是当前的版本，可以穿梭到不同版本
使用`git reset —hard commit_id`   
`git log`查看提交历史
`git reflog`查看命令历史，回到未来版本

## 工作区和暂存区
工作区：电脑可见目录learngit
### 版本库
git init的时候创建了一个隐藏的目录.git，这是Git的版本库
版本库里最重要的是stage（index）的暂存区，Git自动创建的第一个分支master，以及指向master的一个指针HEAD

![](15710346396142.jpg)

第一步`git add`把文件添加，是把文件修改添加到暂存区
第二步`git commit`提交更改，把暂存区的内容提交到当前分支

### 操作一下
修改一下readme，然后再自己创建一个文件在工作区里，`git status`查看状态
可见readme被修改了，LICENSE还没有被add过，状态为Untracked

然后git add一下两个文件之后status发生了变化

![](15710353106115.jpg)
提交结果就是把所有的修改内容放到了暂存区stage，然后执行git commit 把暂存区的修改提交到分支

commit过后，没有对工作区修改，那么工作区就是clean的，暂存区就没有任何内容了

![](15710355259900.jpg)

暂存区很重要

## 管理修改
Git跟踪并管理的是修改，而不是文件
修改一次readme，并add
然后再修改一次，来commit一下
这里第二次修改没有放进state，所以只提交了第一次修改
`git diff HEAD — readme.txt`查看工作区与版本库的最新版本的区别

所以add commit都要进行

## 撤销修改
### 第一阶段的修改撤销，工作区中的
`git checkout — file`可以丢弃工作区的修改
这种情况是还没有add到暂存区的时候，撤销修改就回到了库版本相同的状态

如果是添加到了暂存区后，再做修改，撤销修改就回到了添加到暂存区之后的状态

### 第二阶段的修改撤销，暂存区的
`git reset HEAD <file>`可以把暂存区的修改撤销，unstage
`git reset`命令可以回退版本，也可以把暂存区的修改退回到工作区，使用HEAD表示最新的版本
执行过后，暂存区很干净，工作区有修改

### sum
1. 改乱了工作区某个文件的内容，直接丢弃工作区的修改，使用命令`git checkout — file`
2. 不断乱改了，还add添加到了缓存区，丢弃修改，一、`git reset HEAD <file>`就回到了1. 然后git checkout — file
3. 如果已经commit了，撤销就版本回退

## 删除文件
在文件管理器中删除文件
`rm test.txt`
然后工作区和版本库就不一样了
`git status`就能够获知删除了什么文件

接下来的操作
1. 从版本库里删除，删除并提交
```bash
git rm test.txt
git commit -m···
```
1. 误删过后想要恢复

```bash
git checkout — test.txt
```
用版本库的版本替换工作区的版本，一键还原

## 远程仓库
分布式版本控制系统，同一个Git仓库，可以分布到不同的机器，克隆
GitHubssh配置过后根据它的操作提示来
使用`git push`命令，实际上是把当前分支`master`推送到远程，这将会把本地的master和远程的master分支关联起来，以后的推送拉取就会简化命令

第一次推送`git push -u origin master`

只要在本地commit过后，就可以

```bash
git push origin master
```
把本地的master分支推送到github


## 克隆仓库
使用命令`git clone`

## 分支管理
拥有了分支，就可以在分支上干自己的事情，想提交就提交

### 创建与合并分支
每次提交，git会把版本串成一个时间线。这个时间线就是一个分支
主分支master
HEAD不是指向提交，而是指向master，master才是指向提交的，HEAD指向的是当前分支，以及当前分支的提交点

![](15710595301006.png)

 每次提交，master分支会向前移动一步
 
 创建新的分支，不如dev，那么Git就会 iu新建一个指针叫dev，指向master相同的提交，再把HEAD指向dev，就表示当前分支在dev上
 
![](15710598811523.png)

所以想要创建一个新的分支的思路就是，添加一个指针，然后更改HEAD的指向

然后对工作区的修改和提交就是针对dev分支，dev指针移动而master指针不动

还可以合并分支，把dev合并到master上，直接把master指向dev的当前提交
![](15710601788808.png)
完成了合并之后删除dev就好了


```bash
git checkout -b dev
```
相当于创建一个新的并跳转到该分支


```bash
git branch dev
git checkout dev
```


```bash
git branch
```
列出分支，*显示当前分支


```bash
git checkout master
```
又能够切换回主分支，但是主分支的内容上没有dev的操作

合并操作

```bash
git merge dev
```
在master上执行这个合并分支的操作

Fast-forward信息，这次合并是“快进模式”，直接把master指向dev的当前提交

合并完成可以删除分支

```bash
git branch -d dev
```

### switch

```bash
git switch -c dev
```
create并切换到新的分支dev

```bash
git switch master
```
切换到已有的分支

sumup
查看分支：`git branch`
创建分支：`git branch <name>`
切换分支：`git checkout <name>`. `git switch <name>`
创建并切换分支：`git checkout -b <name>`. `git switch -c <name>`
合并某分支到当前分支：`git marge <name>`
删除分支：git branch -d <name>


## 解决冲突
创建一个分支feature1，在分支上操作了一些东西，add，commit，然后切换到master分支，这里会有一个提示，当前分支比远程超前提交
然后又在master分支上修改，add，commit
各自都有了新的提交

![](15710677146786.png)
这种情况无法快速合并

git merge会显示文件冲出需要手动解决
git status也会告知冲突文件
查看内容
会有
<<<<<<<,=======,>>>>>>>标记出不同的分支
修改后保存 add，commit


![](15710678887305.png)

执行可看到分支合并情况

```bash
git log —graph —pretty=oneline —abbrev-commit
```

git log —graph可以看到分支合并图

## 分支管理策略
通常使用快速合并，删除分支后，就可能丢失分支的信息

强制禁用Fast forward模式，会在merge时候生成一个新的commit

这里有一个—no-ff方式的git merge

```bash
git merge —no-ff -m “merge with no-ff dev”
```
这里合并会创建一个新的分支，所以添加了-m写入描述


![](15710684043510.png)

dev不稳定，办公区，master用于发布

## Bug分支

```bash
git stash
```
把当前工作现场储藏起来，相当于一个快照？

然后我们可以从dev切换到master分支，在此创建一个临时分支，
修复完成后回到master完成合并并删除分支

然后checkout回到工作的dev区域，工作区很干净


然后

```bash
git stash list
```
用该命令查看一下工作现场

恢复stash的内容
`git stash apply`恢复，但是没有删除stash的内容，使用`git stash drop`来删除

使用`git stash pop`恢复并删除

git stash list就看不到stash的内容了

在master分支上修复bug，dev来自于master，bug也存在。

于是把那个临时分支上的修改复制到dev上就好

```bash
git cherry-pick ...
```
git自动给dev分支做一次提交

## Feature分支
删除一个没有被合并过的分支

```bash
git branch -D <name>
```

## 多人协作
从远程仓库克隆，git会自动把本地maste分支和远程master分支对应，远程仓库默认名称origin

```bash
git remote
```
查看远程库信息，加-v更加详细

### 推送分支
把该分支上的所有本地提交推送到远程库的分支上

```
git push origin  master
git push origin dev
```

## Rebase
变基操作

## 标签管理
首先切换到想要打标签的分支

```bash
git tag <name>
```
创建一个标签
然后可用git tag查看

补标签

```bash
git tag <name> commitid
```

